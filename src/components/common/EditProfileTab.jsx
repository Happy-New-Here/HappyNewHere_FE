import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileSubmitButton from "./ProfileSubmitButton";
import backwardIcon from "../../assets/backwardIcon.svg";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { PlaceCenter, PlaceLeftRow, PlaceLeftColumn } from "../../styles/utils";
import { SmallText } from "../../styles/text";
import homeIcon from "../../assets/home.svg";

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

const StyledHomeIcon = styled.img`
  width: 20px;
  height: 20px;
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
          {/* <ProfileSubmitButton /> */}
          <StyledHomeIcon src={homeIcon} alt="homeIcon" onClick={() => navigate("/")} />
        </>
      )}
    </StyledEditProfileTab>
  );
};

export default EditProfileTab;
