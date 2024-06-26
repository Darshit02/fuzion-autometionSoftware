import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return(
  <div className="flex overflow-hidden h-full">
    <Sidebar />
    <div className="w-full">
      <InfoBar />
      {props.children}
    </div>
  </div>
  )
};

export default Layout;
