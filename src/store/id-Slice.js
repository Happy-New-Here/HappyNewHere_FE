import { createSlice } from '@reduxjs/toolkit';

const idSlice = createSlice({
    name: 'id',
    initialState: '',
    reducers: {
        Id: (state, action) => {
            state.id = action.payload;
        },
    },
});

export const inInputActions = idSlice.actions;

export default idSlice;
