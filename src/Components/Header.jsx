import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux"
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, SELECTED_LANGUAGE } from '../Utils/constant';
import { toggleShowGptSearch } from '../Utils/gptSlice';
import {setLang} from "../Utils/configSlice"


const Header = () => {

    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector(store => store.gpt.showGptSearch)
    const dispatch = useDispatch()
    

    const handleSignOut = () =>{
      signOut(auth).then(() => {
       
      }).catch((error) => {
        
      });
    }


    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
          navigate("/browse")
          
        } else {
          dispatch(removeUser())
          navigate("/")
          
        }
      });

      return () => unsubscribe();
    },[])

    const handleGptSearchClick = () => {
      dispatch(toggleShowGptSearch())
    }

    const handleLangChange = (e) =>{
      dispatch(setLang(e.target.value))
    }

  return (
    <div className='absolute w-screen px-1 md:px-8 py-0  md:py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>

     <img className='w-28 md:w-44' src={LOGO} alt="logo" />

  
     {user && <div className='flex p-1 md:p-2'>
     
     {showGptSearch && <select className='w-24 h-10 rounded px-3 py-1 mx-3 my-1 cursor-pointer font-semibold' onChange={handleLangChange}>
       {SELECTED_LANGUAGE.map((lang) => (<option key={lang.value} value={lang.value}>{lang.label}</option>))}
       </select>}
 
      {showGptSearch ? (<div className='text-white w-24 h-10 rounded-3xl px-6 py-1 bg-red-700 bg-opacity-40 border-solid border-2 border-red-700 mx-3 my-1 cursor-pointer' onClick={handleGptSearchClick}>Home</div>) : (<div className='text-white w-24 h-10 rounded-3xl px-3 py-1 bg-white bg-opacity-40 border-solid border-2 border-white mx-3 my-1 cursor-pointer' onClick={handleGptSearchClick}>
       Search
       <FontAwesomeIcon className='text-white ml-1' icon={faMagnifyingGlass}/>
      </div>)}
       
       <img className='hidden md:inline-block w-12 h-12 ' src={user?.photoURL} alt="user-icon" />
 
       <div className='bg-red-700 w-20 md:w-24 h-10 rounded px-1 md:px-3 py-1 mx-3 my-1 cursor-pointer font-semibold text-white hover:bg-opacity-80' onClick={handleSignOut}>Sign Out</div>
 
       </div>}
    

 
    </div>
  )
}

export default Header
