import React from "react";
import logo from "../../assets/logo.svg";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: ${(props) => props.width};

  @media (min-width: 768px) {
    width: ${(props) => props.widthDesktop};
  }

  @media (prefers-color-scheme: dark) {
    filter: invert(100%);
  }
`;

const Logo = ({ width, widthDesktop }) => {
  return <StyledLogo src={logo} alt="logo" width={width} widthDesktop={widthDesktop} />;
};

export default Logo;
