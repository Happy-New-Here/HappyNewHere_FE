import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetUserInfo } from "../../../store/User-action";
import { setProfileImgInput } from "../../../store/UserInfoInputSlice";
import DefaultProfileImg from "../../../assets/DefaultProfileImg.png";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { PlaceCenter } from "../../../styles/utils";
import { SmallText } from "../../../styles/text";
import { ProfileImg } from "../../../styles/profileStyle";

const StyledEditProfileImg = styled(PlaceCenter)`
  width: 100%;
  height: auto;
  padding: 32px 0;
  flex-direction: column;
  gap: 16px;
  border-bottom: 0.5px solid #959595;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 24px 0;
    border: none;
    gap: 28px;
  }
`;

const EditProfileImgButtonContainer = styled(PlaceCenter)`
  justify-content: space-between;
  gap: 20px;
`;

const EditProfileImgButton = styled.button`
  // width: 80px;
`;

const EditProfileImg = () => {
  const dispatch = useDispatch();
  // const profileImg = useSelector((state) => state.user.profileImg);
  const profileImg = localStorage.getItem("profileImg");

  // 편집 완료 전 인풋값 임시 저장할 곳
  const profileImgInput = useSelector((state) => state.userInfoInput.profileImgInput);

  // 프로필 사진 업로드
  const profileImgInputRef = useRef(null);

  const handleUploadProfileImg = () => {
    profileImgInputRef.current.click();
  };

  const onFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      let uploadedImage = reader.result || null;
      dispatch(setProfileImgInput(uploadedImage)); // 임시 저장

      // Base64 문자열을 디코딩하여 ArrayBuffer를 생성

      uploadedImage = uploadedImage.substring(uploadedImage.indexOf(",") + 1);

      const binaryString = atob(uploadedImage);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
      }
      const arrayBuffer = bytes.buffer;

      // ArrayBuffer를 Blob 객체로 변환
      const blob = new Blob([arrayBuffer], { type: "image/jpeg" });

      // Blob 객체를 URL로 변환
      const uploadedImageUrl = URL.createObjectURL(blob).substring(5);

      console.log(`image url to send: ${uploadedImageUrl}`); // test용
      // dispatch(userAction.setProfileImg(uploadedImageUrl)); // test용
    };
  };

  // 프로필 사진 기본 이미지로
  const handleClickDefaultProfileImg = () => {
    dispatch(setProfileImgInput(DefaultProfileImg)); // 임시 저장
    // dispatch(userAction.setProfileImg(DefaultProfileImg)); // test용
  };

  return (
    <StyledEditProfileImg>
      <ProfileImg
        backgroundImg={profileImgInput}
        widthMobile="64px"
        heightMobile="64px"
        widthDesktop="80px"
        heightDesktop="80px"
        boxshadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
      />
      <EditProfileImgButtonContainer>
        <EditProfileImgButton onClick={handleUploadProfileImg}>
          <SmallText fontSize="14px" color="#9A0501">
            업로드
          </SmallText>
        </EditProfileImgButton>
        <input
          ref={profileImgInputRef}
          accept="image/*"
          type="file"
          style={{ display: "none" }}
          onChange={onFileChange}
        />

        <EditProfileImgButton onClick={handleClickDefaultProfileImg}>
          <SmallText fontSize="14px" color="#4F4E4E">
            삭제
          </SmallText>
        </EditProfileImgButton>
      </EditProfileImgButtonContainer>
    </StyledEditProfileImg>
  );
};

export default EditProfileImg;
