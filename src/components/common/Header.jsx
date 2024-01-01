import React from "react";
import { HeaderLayout } from "../../styles/utils";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import Logo from "./Logo";
import Info from "../../assets/Info.svg";
import { SmallText } from "../../styles/text";

const Header = () => {
  const navigate = useNavigate();

  const togoInfo = () => {
    navigate("/manual");
  };

  const isPC = useMediaQuery({
    query: "(min-width:768px)",
  });

  // console.log("isPC", isPC);

  return (
    <HeaderLayout>
      <Logo width="120px" widthDesktop="130px" />
      {!isPC ? (
        <InfoWrapper onClick={togoInfo}>
          <img src={Info} alt="info" />
          <SmallText
            color="#9A0501"
            fontFamily="Inter"
            fontSize="0.75rem"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
          >
            도움말
          </SmallText>
        </InfoWrapper>
      ) : null}
    </HeaderLayout>
  );
};

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  gap: 0.3rem;
`;

export default Header;
