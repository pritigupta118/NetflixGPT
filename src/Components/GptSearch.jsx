import React from 'react'
import SearchBar from './SearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_URL } from '../Utils/constant'

const GptSearch = () => {
  return (
    <div>
    <div className='absolute -z-10'>
        <img src={BG_URL} alt="bg-img" />
      </div>
      <SearchBar/>
      <GptMoviesSuggestion/>
    </div>
  )
}

export default GptSearch
