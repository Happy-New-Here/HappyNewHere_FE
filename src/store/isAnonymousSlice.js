import { createSlice } from "@reduxjs/toolkit";

const isAnonymous = createSlice({
  name: "isAnonymous",
  initialState: false,
  reducers: {
    setIsAnonymous: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsAnonymous } = isAnonymous.actions;

export default isAnonymous.reducer;
