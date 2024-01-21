import React from 'react'
import lang from '../Utils/language'
import { useSelector } from 'react-redux'

const SearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
   <div className='pt-[10%] flex justify-center'>
    <form className='w-1/2 bg-gray-900 grid grid-cols-12'>
      <input type="text" placeholder={lang[langKey].searchPlaceholder} className='p-4 m-4 col-span-9'/>
      <button className=' m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>
    </form>
   </div>
  )
}

export default SearchBar
