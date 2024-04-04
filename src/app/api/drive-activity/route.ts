import { db } from "@/lib/db";
import { auth, clerkClient } from "@clerk/nextjs";
import { google } from "googleapis";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET() {
  const oauthClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
  const clerkResponse = await clerkClient.users.getUserOauthAccessToken(
    userId,
    "oauth_google"
  );

  const accessToken = clerkResponse[0].token;
  oauthClient.setCredentials({
    access_token: accessToken,
  });

  const drive = google.drive({
    version: "v3",
    auth: oauthClient,
  });
  const channelId = uuidv4();

  const startPageTokenResponse = await drive.changes.getStartPageToken({});
  const startPageToken = startPageTokenResponse.data.startPageToken;
  if (startPageToken == null) {
    return NextResponse.json(
      { error: "Start page token not found" },
      { status: 404 }
    );
  }
  const listener = await drive.changes.watch({
    pageToken: startPageToken,
    supportsAllDrives: true,
    supportsTeamDrives: true,
    requestBody: {
      id: channelId,
      type: "web_hook",
      address: `${process.env.NGROK_URI}/api/drive-activity/notification`,
      kind: "api#channel",
    },
  });

  if (listener.status == 200) {
    //if listener created store its channel id in db
    const channelStored = await db.user.updateMany({
      where: {
        clerkId: userId,
      },
      data: {
        googleResourceId: listener.data.resourceId,
      },
    });
    if (channelStored) {
      return new NextResponse("Listening to changes...");
    }
  }

  return new NextResponse("Oops! something went wrong, try again");
}
