import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetUserInfo } from "../../../store/User-action";
import {
  setStateMsgInput,
  setNicknameInput,
  setProfileImgInput,
} from "../../../store/UserInfoInputSlice";
import DefaultProfileImg from "../../../assets/DefaultProfileImg.png";
import EditProfileImg from "../../common/EditProfile/EditProfileImg";
import EditUserInfo from "../../common/EditProfile/EditUserInfo";
import LogoutButton from "./LogoutButton";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import {
  PlaceCenter,
  PlaceLeftColumn,
  PlaceLeftRow,
  PlaceTopColumn,
} from "../../../styles/utils";
import { SmallText } from "../../../styles/text";
import { ProfileImg } from "../../../styles/profileStyle";

const StyledEditProfileOrganism = styled(PlaceTopColumn)`
  width: 100%;
  height: auto;
  //   border-bottom: 1px solid black; // 확인용

  @media (min-width: 768px) {
  }
`;

const EditProfileOrganism = () => {
  return (
    <StyledEditProfileOrganism>
      <EditProfileImg />
      <EditUserInfo />
    </StyledEditProfileOrganism>
  );
};

export default EditProfileOrganism;
