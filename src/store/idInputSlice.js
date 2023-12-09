import { createSlice } from '@reduxjs/toolkit';

const idInputSlice = createSlice({
    name: 'idInput',
    initialState: '',
    reducers: {
        setIdInput: (state, action) => action.payload,
    },
});

export const { setIdInput } = idInputSlice.actions;
export default idInputSlice.reducer;
