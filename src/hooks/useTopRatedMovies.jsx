import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../Utils/constant'
import { addtopRatedMovies } from '../Utils/movieSlice'

const useTopRatedMovies = () => {
 const dispatch = useDispatch()
 const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)


 const getTopRatedMovies = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)

  const json = await data.json()

  dispatch(addtopRatedMovies(json.results))
 }
 useEffect(()=>{
  !topRatedMovies && getTopRatedMovies()
},[])
}



export default useTopRatedMovies
