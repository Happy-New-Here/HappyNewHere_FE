import React from "react";
import { HeaderLayout } from "../../styles/utils";
import Logo from "./Logo";

const Header = () => {
  return (
    <HeaderLayout>
      <Logo width="120px" widthDesktop="130px" />
    </HeaderLayout>
  );
};

export default Header;
