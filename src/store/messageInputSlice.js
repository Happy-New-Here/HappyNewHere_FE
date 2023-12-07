import { createSlice } from "@reduxjs/toolkit";

const messageInputSlice = createSlice({
  name: "messageInput",
  initialState: "",
  reducers: {
    setMessageInput: (state, action) => action.payload,
  },
});

export const { setMessageInput } = messageInputSlice.actions;
export default messageInputSlice.reducer;
