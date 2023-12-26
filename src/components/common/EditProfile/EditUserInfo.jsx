import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetUserInfo } from "../../../store/User-action";
import {
  setUserIdInput,
  setStateMsgInput,
  setNicknameInput,
} from "../../../store/UserInfoInputSlice";
import LogoutButton from "../../organisms/EditProfile/LogoutButton";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import { PlaceLeftColumn, PlaceLeftRow } from "../../../styles/utils";
import { SmallText } from "../../../styles/text";

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

// const UserInfoContainer = () => {};

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
  const userIdInput = useSelector((state) => state.userInfoInput.userIdInput);
  const nicknameInput = useSelector((state) => state.userInfoInput.nicknameInput);
  const stateMsgInput = useSelector((state) => state.userInfoInput.stateMsgInput);

  const stateMsgMaxLength = 40; // 상태메시지 최대 글자 수

  useEffect(() => {
    GetUserInfo(dispatch); // 유저 정보 get
  }, [dispatch]);

  const handleUserIdInputChange = (event) => {
    dispatch(setUserIdInput(event.target.value)); // 임시 저장
  };

  const handleNicknameInputChange = (event) => {
    dispatch(setNicknameInput(event.target.value)); // 임시 저장
  };

  const handleStateMsgInputChange = (event) => {
    dispatch(setStateMsgInput(event.target.value)); // 임시 저장
  };

  // const navigate = useNavigate();

  // const logout = () => {
  //     localStorage.removeItem('accessToken');
  //     navigate('/auth');
  // };

  return (
    <>
      <StyledEditUserInfo>
        {/* ID */}
        <UserInfoContainer>
          <UserInfoType>
            <SmallText fontWeight="600">ID</SmallText>
          </UserInfoType>
          <UserInfo>
            <input
              type="text"
              defaultValue={userIdInput}
              value={userIdInput}
              // readOnly
              onChange={handleUserIdInputChange}
              placeholder="ID를 입력하세요"
              // style={{ width: "100%" }}
              className="w-full h-[44px] p-3 border rounded-md border-black focus:border-2 focus:border-[#9a0501] outline-none"
            />
            {!userIdInput ? (
              <div className="h-[24px] flex justify-center items-center">
                <SmallText fontSize="12px" color="#9A0501">
                  ID는 필수 항목입니다.
                </SmallText>
              </div>
            ) : (
              <div className="h-[24px] flex justify-center items-center"></div>
            )}
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
                {stateMsgInput ? `${stateMsgInput.length}` : "0"}/{stateMsgMaxLength}
              </SmallText>
            </div>
          </UserInfo>
        </UserInfoContainer>
      </StyledEditUserInfo>
      <LogoutButton />
      {/* <button
                className="flex-grow-0 flex-shrink-0 w-[89px] h-[17px] text-base font-semibold text-left text-[#9a0501] hover:brightness-50 mb-8"
                onClick={logout}
            >
                로그아웃
            </button> */}
    </>
  );
};

export default EditUserInfo;
