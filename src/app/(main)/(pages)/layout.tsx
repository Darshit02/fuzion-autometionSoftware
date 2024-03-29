import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-full rounded-l-3xl border-muted-foreground/20 overflow-scroll">
      {props.children}
    </div>
  );
};

export default Layout;