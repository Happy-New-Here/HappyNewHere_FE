// 로그인 후 돌아갈 페이지 설정

import { createSlice } from "@reduxjs/toolkit";

const currentPage = createSlice({
  name: "currentPage",
  initialState: "/",
  reducers: {
    setCurrentPage: (state, action) => action.payload,
  },
});

export const { setCurrentPage } = currentPage.actions;

export default currentPage.reducer;
