import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesName: null,
    moviesTmdbResult: null
  },
  reducers: {
    toggleShowGptSearch(state) {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) =>{
      const {moviesName, moviesTmdbResult} = action.payload;
      state.moviesName = moviesName;
      state.moviesTmdbResult = moviesTmdbResult;
    }
  },
})

export const {toggleShowGptSearch, addGptMovieResult} = gptSlice.actions;
export default gptSlice.reducer;