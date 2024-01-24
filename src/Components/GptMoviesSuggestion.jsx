import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMoviesSuggestion = () => {
 const {moviesName,moviesTmdbResult} = useSelector((store) => store.gpt);

 if(!moviesName) return null

  return (
    <div className='bg-black p-4 m-4 text-white bg-opacity-80'>

    {moviesName.map((movie,index) => (<MovieList key={movie} title={movie} movies={moviesTmdbResult[index]}/>))}
      
    </div>
  )
}

export default GptMoviesSuggestion
