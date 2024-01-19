import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../Utils/constant'
import { addupcomingMovies } from '../Utils/movieSlice'

const useUpcomingMovies = () => {
 const dispatch = useDispatch()

 const getUpcomingMovies = async () =>{
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)

  const json = await data.json()

  dispatch(addupcomingMovies(json.results))
 }
 useEffect(()=>{
  getUpcomingMovies()
},[])
}



export default useUpcomingMovies
