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
  const userIdInput = useSelector((state) => state.userInfoInput.userIdInput);
  const nicknameInput = useSelector((state) => state.userInfoInput.nicknameInput);
  const nickname = localStorage.getItem("nickname");
  const profileImgInput = useSelector((state) => state.userInfoInput.profileImgInput);
  const stateMsgInput = useSelector((state) => state.userInfoInput.stateMsgInput);

  const paramsToSubmit = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
    body: {
      userId: userIdInput,
      nickname: nicknameInput,
      profileImg: profileImgInput,
      stateMsg: stateMsgInput,
    },
  };

  const handleClickProfileSubmit = () => {
    axios
      .get(`${BASE_URL}/createAccount`, paramsToSubmit)
      .then((response) => {
        console.log(`Submitted user info successfully. `);
        navigate("/");
      })
      .catch((error) => {
        console.error(`Failed to submit user info.`, error);
      });
  };

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <StyledProfileSubmitButton>
      {isPc ? (
        <Button
          type={nicknameInput ? "primary" : "disabled"}
          width="60px"
          height="44px"
          // paddingX="12px"
          // paddingY="6px"
          fontSize="16px"
          onClick={handleClickProfileSubmit}
        >
          완료
        </Button>
      ) : (
        <SmallText
          color={nicknameInput ? "#9A0501" : "#909090"}
          cursor={nicknameInput ? "pointer" : "not-allowed"}
          onClick={handleClickProfileSubmit}
        >
          완료
        </SmallText>
      )}
    </StyledProfileSubmitButton>
  );
};

export default ProfileSubmitButton;
