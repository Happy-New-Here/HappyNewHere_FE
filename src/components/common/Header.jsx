import React from "react";
import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { HeaderLayout } from "../../styles/utils";

const Logo = styled.img`
  width: 120px;

  @media (min-width: 768px) {
    width: 130px;
  }

  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`;

const Header = () => {
  return (
    <HeaderLayout>
      <Logo src={logo} alt="logo" />
    </HeaderLayout>
  );
};

export default Header;
