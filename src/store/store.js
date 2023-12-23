import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice } from "./auth-slice";
import messageInputSlice from "./messageInputSlice";
import selectedPaperNumSlice from "./selectedPaperNumSlice";
import isMessageWriteVisibleSlice from "./isMessageWriteVisibleSlice";
import isAnonymousSlice from "./isAnonymousSlice";
import searchSlice from "./searchSlice";
import currentPageSlice from "./currentPageSlice";
import userSlice from "./User-Slice";
import UserInfoInputSlice from "./UserInfoInputSlice";
import searchUserSlice from "./searchUserSlice";
import calendarSlice from "./calendar-slice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    messageInput: messageInputSlice,
    selectedPaperNum: selectedPaperNumSlice,
    isMessageWriteVisible: isMessageWriteVisibleSlice,
    isAnonymous: isAnonymousSlice,
    search: searchSlice.reducer,
    currentPage: currentPageSlice,
    user: userSlice.reducer,
    userInfoInput: UserInfoInputSlice,
    calendar: calendarSlice,
  },
});
