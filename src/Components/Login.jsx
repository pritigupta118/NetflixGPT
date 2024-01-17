import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true)

const toggleButton = () =>{
setIsSignIn(!isSignIn)
}

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" />
      </div>

      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded'/>}

        <input type="email" placeholder='Email or phone number' className='p-4 my-4 w-full bg-gray-700 rounded'/>

        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded'/>

        <button className='p-4 my-6 bg-red-700 w-full rounded'>{isSignIn ? "Sign In" : "Sign Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleButton}>{isSignIn ? "New to Netflix? Sign Up now." : "Already registered? Sign In now."}</p>
      </form>
    </div>
  )
}

export default Login
