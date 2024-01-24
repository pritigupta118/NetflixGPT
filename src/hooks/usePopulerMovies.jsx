import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../Utils/constant'
import { addPopulerMovies } from '../Utils/movieSlice'

const usePopulerMovies = () => {

  const dispatch = useDispatch()
  const populerMovies = useSelector((store) => store.movies.populerMovies)

  const getPpulerMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
  
    const json = await data.json()
    
    dispatch(addPopulerMovies(json.results))
  }
  
  useEffect(() => {
    !populerMovies && getPpulerMovies()
  }, [])

}

export default usePopulerMovies
