import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: { id: '', stateMsg: '' },
    reducers: {
        setId(state, action) {
            state.id = action.payload;
        },

        setStateMsg(state, action) {
            state.stateMsg = action.payload;
        },
    },
});

export const { setId, setStateMsg } = userSlice.actions;

export default userSlice;
