import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUserInfo } from "../../store/User-action";
import {
  setStateMsgInput,
  setNicknameInput,
  setProfileImgInput,
} from "../../store/UserInfoInputSlice";
import DefaultProfileImg from "../../assets/DefaultProfileImg.png";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import {
  PlaceCenter,
  PlaceLeftColumn,
  PlaceLeftRow,
  PlaceTopColumn,
} from "../../styles/utils";
import { SmallText } from "../../styles/text";
import { ProfileImg } from "../common/Profile";

const StyledEditProfileOrganism = styled(PlaceTopColumn)`
  width: 100%;
  height: auto;
  //   border-bottom: 1px solid black; // 확인용

  @media (min-width: 768px) {
  }
`;

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
    // dispatch(userAction.setProfileImg(DefaultProfileImg)); // test용. post 보낼 때는 null 보내기
  };

  return (
    <StyledEditProfileImg>
      <ProfileImg
        backgroundImg={profileImgInput}
        widthMobile="64px"
        heightMobile="64px"
        widthDesktop="80px"
        heightDesktop="80px"
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

//

const StyledEditUserInfo = styled(PlaceLeftColumn)`
  width: 100%;
  padding: 32px 0;

  @media (min-width: 768px) {
  }
`;

const UserInfoContainer = styled(PlaceLeftColumn)`
  justify-content: flex-start;
  width: 100%;
  height: 96px;
  // gap: 0; // UserInfoType과 UserInfo 사이

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;

    height: 80px;
    gap: 16px;
  }
`;

const UserInfoType = styled(PlaceLeftRow)`
  width: 100%;
  height: 36px;

  @media (min-width: 768px) {
    width: 78px;
    height: 44px; // input 태그 높이와 같게
  }
`;

const UserInfo = styled(PlaceLeftColumn)`
  width: 100%;
  flex: 1; // 나머지 공간 차지
  align-items: flex-end;
  justify-content: flex-start;
`;

const EditUserInfo = () => {
  const dispatch = useDispatch();

  // 가져온 유저 정보 (편집 전 초기값)
  // const userId = useSelector((state) => state.user.userId);
  // const nickname = useSelector((state) => state.user.nickname);
  // const stateMsg = useSelector((state) => state.user.stateMsg);
  const userId = localStorage.getItem("userId");
  const nickname = localStorage.getItem("nickname");
  const stateMsg = localStorage.getItem("stateMsg");

  // 편집 완료 전 인풋값 임시 저장할 곳
  const nicknameInput = useSelector((state) => state.userInfoInput.nicknameInput);
  const stateMsgInput = useSelector((state) => state.userInfoInput.stateMsgInput);

  const stateMsgMaxLength = 40; // 상태메시지 최대 글자 수

  useEffect(() => {
    GetUserInfo(dispatch); // 유저 정보 get
  }, [dispatch]);

  const handleNicknameInputChange = (event) => {
    dispatch(setNicknameInput(event.target.value)); // 임시 저장
  };

  const handleStateMsgInputChange = (event) => {
    dispatch(setStateMsgInput(event.target.value)); // 임시 저장
  };

  return (
    <StyledEditUserInfo>
      {/* ID */}
      <UserInfoContainer>
        <UserInfoType>
          <SmallText fontWeight="600">ID</SmallText>
        </UserInfoType>
        <UserInfo>
          <input
            type="text"
            defaultValue={userId}
            value={userId}
            readOnly
            // style={{ width: "100%" }}
            className="w-full h-[44px] p-3 border rounded-md border-black outline-none"
          />
        </UserInfo>
      </UserInfoContainer>
      {/* nickname */}
      <UserInfoContainer>
        <UserInfoType>
          <SmallText fontWeight="600">닉네임</SmallText>
        </UserInfoType>
        <UserInfo>
          <input
            type="text"
            defaultValue={nicknameInput}
            value={nicknameInput}
            onChange={handleNicknameInputChange}
            placeholder="닉네임을 입력하세요"
            // style={{ width: "100%" }}
            className="w-full h-[44px] p-3 border rounded-md border-black focus:border-2 focus:border-[#9a0501] outline-none"
          />
          {!nicknameInput ? (
            <div className="h-[24px] flex justify-center items-center">
              <SmallText fontSize="12px" color="#9A0501">
                닉네임은 필수 항목입니다.
              </SmallText>
            </div>
          ) : (
            <div className="h-[24px] flex justify-center items-center"></div>
          )}
        </UserInfo>
      </UserInfoContainer>

      {/* stateMsg */}
      <UserInfoContainer>
        <UserInfoType>
          <SmallText fontWeight="600">상태메시지</SmallText>
        </UserInfoType>
        <UserInfo>
          <input
            type="text"
            defaultValue={stateMsgInput}
            value={stateMsgInput}
            maxLength={stateMsgMaxLength}
            onChange={handleStateMsgInputChange}
            placeholder="상태메시지를 입력하세요"
            // style={{ width: "100%" }}
            className="w-full h-[44px] p-3 border rounded-md border-black focus:border-2 focus:border-[#9a0501] outline-none"
          />
          <div className="h-[24px] flex justify-center items-center">
            <SmallText fontSize="12px">
              {stateMsgInput ? `${stateMsgInput.length}` : "0"}/{stateMsgMaxLength}자
            </SmallText>
          </div>
        </UserInfo>
      </UserInfoContainer>
    </StyledEditUserInfo>
  );
};

const EditProfileOrganism = () => {
  return (
    <StyledEditProfileOrganism>
      <EditProfileImg />
      <EditUserInfo />
    </StyledEditProfileOrganism>
  );
};

export default EditProfileOrganism;
