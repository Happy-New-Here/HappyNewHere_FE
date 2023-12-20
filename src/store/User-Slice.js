import { createSlice } from "@reduxjs/toolkit";
import DefaultProfileImg from "../assets/DefaultProfileImg.png";

const userSlice = createSlice({
  name: "user",
  initialState: { userId: "", stateMsg: "", nickname: "", profileImg: DefaultProfileImg },
  reducers: {
    setId(state, action) {
      state.userId = action.payload;
    },

    setStateMsg(state, action) {
      state.stateMsg = action.payload;
    },

    setNickname(state, action) {
      state.nickname = action.payload;
    },

    setProfileImg(state, action) {
      state.profileImg = action.payload;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice;
