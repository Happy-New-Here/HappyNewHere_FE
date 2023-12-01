import { createSlice } from "@reduxjs/toolkit";

const selectedPaperNumSlice = createSlice({
  name: "selectedPaperNum",
  initialState: 1,
  reducers: {
    setSelectedPaperNum: (state, action) => action.payload,
  },
});

export const { setSelectedPaperNum } = selectedPaperNumSlice.actions;
export default selectedPaperNumSlice.reducer;
