import { createSlice } from "@reduxjs/toolkit";

const isMessageWriteVisibleSlice = createSlice({
  name: "isMessageWriteVisible",
  initialState: false,
  reducers: {
    setIsMessageWriteVisible: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsMessageWriteVisible } = isMessageWriteVisibleSlice.actions;

export default isMessageWriteVisibleSlice.reducer;
