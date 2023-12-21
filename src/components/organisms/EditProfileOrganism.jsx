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
  // const [profileImgInput, setProfileImgInput] = useState(profileImg);
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
      // setProfileImgInput(uploadedImage); // 임시 저장
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
    // setProfileImgInput(DefaultProfileImg); // 임시 저장
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
  // gap: 24px;

  @media (min-width: 768px) {
  }
`;

const UserInfoContainer = styled(PlaceLeftRow)`
  width: 100%;
  // height: auto;
  height: 60px;
  align-items: flex-start;
  gap: 16px; // UserInfoType과 UserInfo 사이

  @media (min-width: 768px) {
  }
`;

const UserInfoType = styled.div`
  width: 78px;
`;

const UserInfo = styled(PlaceLeftColumn)`
  width: 100%;
  flex: 1; // 나머지 공간 차지
  gap: 5px;
  align-items: flex-end;
`;

const EditUserInfo = () => {
  const dispatch = useDispatch();

  // 가져온 유저 정보 (편집 전 초기값)
  const userId = useSelector((state) => state.user.userId);
  // const nickname = useSelector((state) => state.user.nickname);
  const nickname = localStorage.getItem("nickname");
  const stateMsg = useSelector((state) => state.user.stateMsg);

  // 편집 완료 전 인풋값 임시 저장할 곳
  // const [nicknameInput, setNicknameInput] = useState(nickname);
  // const [stateMsgInput, setStateMsgInput] = useState(stateMsg);
  const nicknameInput = useSelector((state) => state.userInfoInput.nicknameInput);
  const stateMsgInput = useSelector((state) => state.userInfoInput.stateMsgInput);

  const stateMsgMaxLength = 40; // 상태메시지 최대 글자 수

  useEffect(() => {
    GetUserInfo(dispatch); // 유저 정보 get
  }, [dispatch]);

  const handleNicknameInputChange = (event) => {
    // setNicknameInput(event.target.value); // 임시 저장
    dispatch(setNicknameInput(event.target.value)); // 임시 저장
  };

  const handleStateMsgInputChange = (event) => {
    // setStateMsgInput(event.target.value); // 임시 저장
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
          <SmallText>{userId}</SmallText>
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
            className="w-full border-b border-black hover:border-b-2 hover:border-[#9a0501] outline-none"
          />
          {!nicknameInput && (
            <SmallText fontSize="12px" color="#9A0501">
              닉네임은 필수 항목입니다.
            </SmallText>
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
            className="w-full border-b border-black hover:border-b-2 hover:border-[#9a0501] outline-none"
          />
          <SmallText fontSize="12px">
            {stateMsgInput ? `${stateMsgInput.length}` : "0"}/{stateMsgMaxLength}자
          </SmallText>
        </UserInfo>
      </UserInfoContainer>
    </StyledEditUserInfo>
  );
};

const EditProfileOrganism = () => {
  const dispatch = useDispatch();

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });

  return (
    <StyledEditProfileOrganism>
      <EditProfileImg />
      <EditUserInfo />
    </StyledEditProfileOrganism>
  );
};

export default EditProfileOrganism;
