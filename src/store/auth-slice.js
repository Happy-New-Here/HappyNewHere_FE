import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth-slice",
  initialState: {
    signin: {
      status: null,
      token: null,
    },
    signup: {
      status: null,
    },
  },
  reducers: {
    setSignIn: (state, action) => {
      state.signin.status = action.payload.status;
      state.signin.token = action.payload.token;
    },
    setSignUp: (state, action) => {
      state.signup.status = action.payload.status;
    },
  },
});

export const AuthActions = AuthSlice.actions;
