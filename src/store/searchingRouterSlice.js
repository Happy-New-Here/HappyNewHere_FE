import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchingRouter: '',
};

const searchingRouterSlice = createSlice({
    name: 'searchingRouter',
    initialState,
    reducers: {
        setSearching(state, action) {
            state.searchingRouter = action.payload;
        },
    }
});

export const searchingRouterAction = searchingRouterSlice.actions;

export default searchingRouterSlice;
