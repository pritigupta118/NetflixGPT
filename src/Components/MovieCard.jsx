import React from 'react'
import {POSTER_CDN_URL} from "../Utils/constant"

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4' >
      <img src={POSTER_CDN_URL + posterPath} alt="poster" />
    </div>
  )
}

export default MovieCard
