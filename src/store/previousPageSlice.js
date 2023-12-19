// 로그인 후 돌아갈 페이지 설정

import { createSlice } from "@reduxjs/toolkit";

const previousPage = createSlice({
  name: "previousPage",
  initialState: "/",
  reducers: {
    setPreviousPage: (state, action) => action.payload,
  },
});

export const { setPreviousPage } = previousPage.actions;
export default previousPage.reducer;
