// 프로필 편집 페이지에서 POST 요청하기 전 임시로 저장하여 렌더링해줄 사용자 정보 편집값들

import { createSlice } from "@reduxjs/toolkit";
const userId = localStorage.getItem("userId");
const nickname = localStorage.getItem("nickname");
const profileImg = localStorage.getItem("profileImg");
const stateMsg = localStorage.getItem("stateMsg");

const UserInfoInputSlice = createSlice({
  name: "userInfoInput",
  initialState: {
    userIdInput: userId,
    nicknameInput: nickname,
    profileImgInput: profileImg,
    stateMsgInput: stateMsg,
  },
  reducers: {
    setUserIdInput(state, action) {
      state.userIdInput = action.payload;
    },

    setNicknameInput(state, action) {
      state.nicknameInput = action.payload;
    },

    setProfileImgInput(state, action) {
      state.profileImgInput = action.payload;
    },

    setStateMsgInput(state, action) {
      state.stateMsgInput = action.payload;
    },

    resetUserInfoInput(state) {
      return initialState;
    },
  },
});

export const {
  setUserIdInput,
  setNicknameInput,
  setProfileImgInput,
  setStateMsgInput,
  resetUserInfoInput,
} = UserInfoInputSlice.actions;
export default UserInfoInputSlice.reducer;
