import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { MoviesState } from "src/interfaces/movies";

const initialState: MoviesState = {
    movies: [],
    searchQuery: "",
    page: 1,
    openSnackbar: false,
};

export const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
        setOpenSnackbar: (state, action) => {
            state.openSnackbar = action.payload;
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
});

export const { setMovies, setSearchQuery, setPage, setOpenSnackbar } =
    moviesSlice.actions;
export const selectMoviesState = (state: MoviesState) => state.movies;
export const selectSearchQuery = (state: MoviesState) => state.searchQuery;
export const selectPage = (state: MoviesState) => state.page;
export const selectOpenSnackbar = (state: MoviesState) => state.openSnackbar;
export default moviesSlice.reducer;
