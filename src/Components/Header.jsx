import React, { useEffect } from 'react'
import { useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useDispatch} from "react-redux"
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO } from '../Utils/constant';


const Header = () => {

    const navigate = useNavigate()
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    

    const [isDropdownVisible, setDropdownVisible] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };

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

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

     <img className='w-44' src={LOGO} alt="logo" />

      {user && <div className='flex p-2'>
      <img className='w-12 h-12 ' src={user?.photoURL} alt="user-icon" />

      <div className="arrow-btn m-2 text-white cursor-pointer" onClick={toggleDropdown}>
        ▼
      </div>

      {isDropdownVisible && (
        <div className="absolute mt-16 bg-black text-white p-2 rounded cursor-pointer">
         <li className='list-none' onClick={handleSignOut}>Sign Out</li>
        </div>
      )}
      </div>}
    </div>
  )
}

export default Header
