import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    populerMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trailerVideo: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) =>{
      state.nowPlayingMovies = action.payload
    },
    addPopulerMovies: (state, action) =>{
      state.populerMovies = action.payload
    },
    addtopRatedMovies: (state, action) => {
      state.topRatedMovies=action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upcomingMovies=action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    }
  },
});

export const {addNowPlayingMovies, addTrailerVideo, addPopulerMovies, addtopRatedMovies, addupcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;