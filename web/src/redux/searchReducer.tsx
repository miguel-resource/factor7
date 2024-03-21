import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSearching: false,
    searchQuery: "",
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setIsSearching: (state, action) => {
            state.isSearching = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        }
    },
});


export const { setIsSearching, setSearchQuery } = searchSlice.actions;
export const searchSelector = (state:any) => state.search;
export default searchSlice.reducer;

