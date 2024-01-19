import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../Utils/constant'
import { addPopulerMovies } from '../Utils/movieSlice'

const usePopulerMovies = () => {

  const dispatch = useDispatch()

  const getPpulerMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
  
    const json = await data.json()
    
    dispatch(addPopulerMovies(json.results))
  }
  
  useEffect(() => {
    getPpulerMovies()
  }, [])

}

export default usePopulerMovies
