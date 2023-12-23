import { createSlice } from "@reduxjs/toolkit";
import DefaultProfileImg from "../assets/DefaultProfileImg.png";

const searchUserSlice = createSlice({
  name: "searchingUser",
  initialState: { userId: "", stateMsg: "", nickname: "", profileImg: DefaultProfileImg },
  reducers: {
    setSearchingId(state, action) {
      state.userId = action.payload;
    },

    setSearchingStateMsg(state, action) {
      state.stateMsg = action.payload;
    },

    setSearchingNickname(state, action) {
      state.nickname = action.payload;
    },

    setSearchingProfileImg(state, action) {
      state.profileImg = action.payload;
    },
  },
});

export const searchUserAction = searchUserSlice.actions;

export default searchUserSlice;
