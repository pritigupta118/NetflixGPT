import React from 'react'
import { useState } from 'react';
import { signOut } from "firebase/auth";
import {auth} from "../Utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    const navigate = useNavigate()
    const user = useSelector(store => store.user)

    const [isDropdownVisible, setDropdownVisible] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };

    const handleSignOut = () =>{
      signOut(auth).then(() => {
        navigate("/")
      }).catch((error) => {
        navigate("/error")
      });
    }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>

     <img className='w-44' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />

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
