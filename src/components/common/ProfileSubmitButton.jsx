import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "./Button";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { PlaceRightRow } from "../../styles/utils";
import { SmallText } from "../../styles/text";

const StyledProfileSubmitButton = styled(PlaceRightRow)`
  @media (min-height: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

const ProfileSubmitButton = () => {
  const nickname = localStorage.getItem("nickname");
  const nicknameInput = useSelector((state) => state.userInfoInput.nicknameInput);

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <StyledProfileSubmitButton>
      {isPc ? (
        <Button
          type={nicknameInput ? "primary" : "disabled"}
          paddingX="12px"
          paddingY="6px"
          fontSize="16px"
        >
          완료
        </Button>
      ) : (
        <SmallText
          color={nicknameInput ? "#9A0501" : "#909090"}
          cursor={nicknameInput ? "pointer" : "not-allowed"}
        >
          완료
        </SmallText>
      )}
    </StyledProfileSubmitButton>
  );
};

export default ProfileSubmitButton;
