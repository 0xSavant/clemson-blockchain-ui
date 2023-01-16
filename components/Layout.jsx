import React from "react";
import { HeaderMiddle } from "./Header";

export const Layout = ({ children }) => {
  return (
    <>
      <HeaderMiddle />
      <div className="w-20">{children}</div>
    </>
  );
};

export default Layout;
