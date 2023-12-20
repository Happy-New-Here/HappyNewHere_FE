import React from "react";
import { useNavigate } from "react-router-dom";
import backwardIcon from "../../assets/backwardIcon.svg";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { PlaceCenter, PlaceLeftRow, PlaceLeftColumn } from "../../styles/utils";
import { SmallText } from "../../styles/text";

const StyledEditProfileTab = styled(PlaceCenter)`
  width: 100vw;
  height: 50px;
  padding: 0 24px;
  justify-content: space-between;
  //   border-bottom: 1px solid black; // 확인용

  @media (min-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0 0;
  }
`;

const EditProfileTab = () => {
  const navigate = useNavigate();

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <StyledEditProfileTab>
      {isPc ? (
        <SmallText fontSize="20px">프로필 편집</SmallText>
      ) : (
        <>
          <img src={backwardIcon} alt="backwardIcon" onClick={() => navigate(-1)} />
          <SmallText>프로필 편집</SmallText>
          <SmallText color="#909090">완료</SmallText>
        </>
      )}
    </StyledEditProfileTab>
  );
};

export default EditProfileTab;
