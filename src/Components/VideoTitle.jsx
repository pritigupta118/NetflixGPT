import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black my-2 md:my-0 px-6 md:px-12 py-2 text-lg md:text-xl rounded font-semibold hover:bg-opacity-80'>Play</button>
        <button className='hidden md:inline-block bg-gray-500 text-white  px-12 py-2 text-xl bg-opacity-50 rounded mx-2 font-semibold'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
