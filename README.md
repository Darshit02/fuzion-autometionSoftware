This is a repository for Fullstack Automation Software : used to connection with DRIVE, DISCORD ,NOTION ,SLACK;

Key Features:
- 📡  Awsome UI
- 🌐 Connection with your app or web
- 🔗 Easy Drag and Drop feature to create flow 
- 🔐 On click Actions
- 📸 Profile Update
- 👀 Show Cradites
- 🚦 Your Payment Status
- 💬 Real-time chat using sockets 
- 🎨 Unique UI 
- 👥 Following system     
- 🎨 Beautiful design
- ⚡ Blazing fast application 
- 📄 SSR (Server-Side Rendering) 
- 🗺️ Grouped routes & layouts 
- 🗃️ MySQL

### Prerequisites

**Node version 18.17 or later**

### Cloning the repository

```shell
https://github.com/Darshit02/fuzion-autometionSoftware.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

DATABASE_URL=

NEXT_PUBLIC_URL=https://localhost:3000
NEXT_PUBLIC_DOMAIN=localhost:3000
NEXT_PUBLIC_SCHEME=https://

NEXT_PUBLIC_GOOGLE_SCOPES=
NEXT_PUBLIC_OAUTH2_ENDPOINT=

NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC=https://cdn.jsdelivr.net/npm/@uploadcare/blocks@
NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE=/web/lr-file-uploader-regular.min.css

DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
DISCORD_TOKEN=
DISCORD_PUBLICK_KEY=
NEXT_PUBLIC_DISCORD_REDIRECT=

NOTION_API_SECRET=
NOTION_CLIENT_ID=
NOTION_REDIRECT_URI=
NEXT_PUBLIC_NOTION_AUTH_URL=



SLACK_SIGNING_SECRET=
SLACK_BOT_TOKEN=
SLACK_APP_TOKEN=
SLACK_CLIENT_ID=
SLACK_CLIENT_SECRET=
SLACK_REDIRECT_URI=
NEXT_PUBLIC_SLACK_REDIRECT=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
OAUTH2_REDIRECT_URI=
NGROK_URI=
CRON_JOB_KEY=
STRIPE_SECRET=
```

### Setup Prisma

Add MySQL Database (I used neonDB)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
