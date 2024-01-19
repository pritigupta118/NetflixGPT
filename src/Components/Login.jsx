import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../Utils/Validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';


const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const dispatch = useDispatch()

  const handleButtonClick = () => {
    const message = checkValidation(email?.current?.value, password?.current?.value)

    setErrorMessage(message)

    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {

          const user = userCredential.user;
          updateProfile(user, {
            displayName: name?.current?.value, photoURL: "https://media.licdn.com/dms/image/D4D03AQGU2in-KtGruA/profile-displayphoto-shrink_100_100/0/1687109580990?e=1710979200&v=beta&t=eBdYH7yZTW1g_8RpkFK8EeYYNVoADgPhSmPB--9Yjuk"
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL
              })
            )

          }).catch((error) => {
            setErrorMessage(error.message)
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
    else {
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          const user = userCredential.user;
      

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMessage(errorCode + "-" + errorMessage);
          setErrorMessage("the user is not found")
        });
    }

  }

  const toggleButton = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" />
      </div>

      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

        {!isSignIn && <input type="text" ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded' />}

        <input ref={email} type="email" placeholder='Email or phone number' className='p-4 my-4 w-full bg-gray-700 rounded' />

        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded' />

        <p className='text-orange-500 text-sm'>{errorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded' onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleButton}>{isSignIn ? "New to Netflix? Sign Up now." : "Already registered? Sign In now."}</p>
      </form>
    </div>
  )
}

export default Login
