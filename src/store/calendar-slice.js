import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
  name: "calendar-slice",
  initialState: {
    calendar: null,
    messagesList: [],
    owner: false,
    selectedMessageIndex: null,
  },
  reducers: {
    setCalendar: (state, action) => {
      state.calendar = action.payload;
    },
    setMessagesList: (state, action) => {
      state.messagesList = action.payload;
    },
    setOwner: (state, action) => {
      state.owner = action.payload;
    },
    setSelectedMessageIndex: (state, action) => {
      state.selectedMessageIndex = action.payload;
    },
  },
});

export const {
  setCalendar,
  setMessagesList,
  setOwner,
  setSelectedMessageIndex,
} = calendarSlice.actions;

export default calendarSlice.reducer;
