import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../Utils/constant'
import { addTrailerVideo } from '../Utils/movieSlice'

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch()
  
  const getMovieVideo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS)
  
    const json = await data.json()
  
    const filterData = json.results.filter((video) => video.type === "Trailer")
    const trailer = filterData.length ? filterData[0] : json.results[0]
  
    dispatch(addTrailerVideo(trailer))
  }
  useEffect(() => {
    getMovieVideo()
    },[])
 
}

export default useMovieTrailer
