import { createSlice } from "@reduxjs/toolkit";

const isMessageViewVisibleSlice = createSlice({
  name: "isMessageViewVisible",
  initialState: {
    messageViewVisible: false,
  },
  reducers: {
    setIsMessageViewVisible: (state, action) => {
      state.messageViewVisible = action.payload;
    },
  },
});

export const { setIsMessageViewVisible } = isMessageViewVisibleSlice.actions;

export default isMessageViewVisibleSlice.reducer;
