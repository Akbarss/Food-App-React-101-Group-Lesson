import React from "react";
import ButtonAppBar from "./Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <ButtonAppBar />
      {children}
    </div>
  );
};

export default Layout;
