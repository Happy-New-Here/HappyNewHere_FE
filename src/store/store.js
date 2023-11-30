import { configureStore } from "@reduxjs/toolkit";

import { AuthSlice } from "./auth-slice";
import messageInputSlice from "./messageInputSlice";
import selectedPaperNumSlice from "./SelectedPaperNumSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    messageInput: messageInputSlice,
    selectedPaperNum: selectedPaperNumSlice,
  },
});
