import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/User-Slice";
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
    border-botton: none;
  }
`;

const EditProfileImgButtonContainer = styled(PlaceCenter)`
  justify-content: space-between;
  // gap: 16px;
`;

const EditProfileImgButton = styled.button`
  width: 80px;
`;

const EditProfileImg = () => {
  const dispatch = useDispatch();
  const profileImg = useSelector((state) => state.user.profileImg);

  const handleClickDefaultProfileImg = () => {
    dispatch(userAction.setProfileImg(DefaultProfileImg));
  };

  return (
    <StyledEditProfileImg>
      <ProfileImg backgroundImg={profileImg} />
      <EditProfileImgButtonContainer>
        <EditProfileImgButton>
          <SmallText fontSize="12px" color="#9A0501">
            사진 변경
          </SmallText>
        </EditProfileImgButton>
        <SmallText fontSize="12px" color="#4F4E4E">
          |
        </SmallText>
        <EditProfileImgButton onClick={handleClickDefaultProfileImg}>
          <SmallText fontSize="12px" color="#4F4E4E">
            기본 이미지
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
  // width: 100%;
  gap: 3px;
`;

const EditUserInfo = () => {
  const userId = useSelector((state) => state.user.userId);
  const nickname = useSelector((state) => state.user.nickname);
  const stateMsg = useSelector((state) => state.user.stateMsg);

  // 저장 전 인풋 임시 저장할 곳
  const [nicknameInput, setNicknameInput] = useState(nickname);
  const [stateMsgInput, setStateMsgInput] = useState(stateMsg);

  const handleNicknameInputChange = (event) => {
    setNicknameInput(event.target.value);
  };

  const handleStateMsgInputChange = (event) => {
    setStateMsgInput(event.target.value);
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
          ></input>
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
            onChange={handleStateMsgInputChange}
            placeholder="상태메시지를 입력하세요"
          ></input>
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
