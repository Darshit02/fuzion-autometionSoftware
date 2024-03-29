import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="mt-[15rem]">{children}</div>
    </div>
  );
};

export default Layout;
