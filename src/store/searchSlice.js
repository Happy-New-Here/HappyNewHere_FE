import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    search: '',
    history: [],
    resultData: [], 
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload;
            state.resultData = []; 
        },
        resetSearch(state) {
            state.search = '';
            state.resultData = []; 
        },
        addSearchToHistory(state, action) {
            const { searchItem } = action.payload;
            state.history = state.history.filter(item => item !== searchItem);
            state.history.unshift(searchItem);
            if (state.history.length > 10) {
                state.history = state.history.slice(0, 10);
            }
        },
        clearSearchHistory: state => {
            state.history = [];
        },
    }
});

export const SearchAction = searchSlice.actions;

export default searchSlice;
