import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { userId: '', stateMsg: '' },
    reducers: {
        setId(state, action) {
            state.userId = action.payload;
        },

        setStateMsg(state, action) {
            state.stateMsg = action.payload;
        },
    },
});

export const userAction = userSlice.actions;

export default userSlice;
