import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState:
    {
        search: '',
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
        },
        resetSearch(state) {
            state.search = '';
        },
    }
});


export const SearchAction = searchSlice.actions;

export default searchSlice;