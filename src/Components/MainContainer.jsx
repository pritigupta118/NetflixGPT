import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

const MainContainer = () => {
const movies = useSelector(store => store.movies?.nowPlayingMovies)

if(!movies) return;
const mainMovie = movies[0]

const {original_title, overview, id} = mainMovie
  return (
    <div>
     <VideoTitle title = {original_title} overview = {overview}/>
     <VideoBg movieId = {id}/>
    </div>
  )
}

export default MainContainer
