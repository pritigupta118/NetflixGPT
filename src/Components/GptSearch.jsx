import React from 'react'
import SearchBar from './SearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_URL } from '../Utils/constant'

const GptSearch = () => {
  return (
    <div>
    <div className='fixed -z-10'>
        <img className='h-screen object-cover md:w-screen' src={BG_URL} alt="bg-img" />
      </div>
     
      <SearchBar/>
      <GptMoviesSuggestion/>
      
     
    </div>
  )
}

export default GptSearch
