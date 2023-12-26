import React from "react";
import { HeaderLayout } from "../../styles/utils";
import styled from "styled-components";
import Logo from "./Logo";
import Info from "./Logo";

const Header = ({ isPC }) => {
  return (
    <HeaderLayout>
      <Logo width="120px" widthDesktop="130px" />
      {!isPC && (
        <InfoWrapper>
          <Info width="120px" widthDesktop="130px" />
        </InfoWrapper>
      )}
    </HeaderLayout>
  );
};

const InfoWrapper = styled.div`
  margin-left: auto;
`;

export default Header;
