import React, { useRef } from 'react'
import lang from '../Utils/language'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../Utils/openAI'
import { API_OPTIONS } from '../Utils/constant'
import { addGptMovieResult } from '../Utils/gptSlice'

const SearchBar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector(store => store.config.lang)
  const searchText = useRef(null)

  const searchMoviesTMDB = async(movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS)

    const json = await data.json()

    return json.results;
  }

  const handleGptSearchCLick = async () =>{
    const gptQuery = "act as a movie recommendation system and suggest some movies for the query" + searchText.current.value + "only give me names of five movies, comma separated, like the example given ahead, example: Gadar,Don,Sholley,Golmal,Koi mil Gaya"

  const gptResult = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResult.choices) return null

   console.log(gptResult.choices[0]?.message?.content)

   const gptMovies = gptResult.choices[0]?.message?.content.split(", ")

   const promiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie))

   const tmdbResults = await Promise.all(promiseArray) 
   console.log(tmdbResults)


   dispatch(addGptMovieResult({moviesName:gptMovies,moviesTmdbResult:tmdbResults}))
  }

  return (
   <div className='pt-[10%] flex justify-center'>
    <form className='w-1/2 bg-gray-900 grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
      <input ref={searchText} type="text" placeholder={lang[langKey].searchPlaceholder} className='p-4 m-4 col-span-9'/>
      <button className=' m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGptSearchCLick}>{lang[langKey].search}</button>
    </form>
   </div>
  )
}

export default SearchBar
