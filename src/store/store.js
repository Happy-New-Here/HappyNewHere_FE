import { configureStore } from "@reduxjs/toolkit";

import { AuthSlice } from "./auth-slice";
import messageInputSlice from "./messageInputSlice";
import selectedPaperNumSlice from "./SelectedPaperNumSlice";
import isMessageWriteVisibleSlice from "./isMessageWriteVisibleSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    messageInput: messageInputSlice,
    selectedPaperNum: selectedPaperNumSlice,
    isMessageWriteVisible: isMessageWriteVisibleSlice,
  },
});
