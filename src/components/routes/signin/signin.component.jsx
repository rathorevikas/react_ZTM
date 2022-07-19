import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const googleSignInHandler = async () => {
    const {user} = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
}

const SignIn = () => {
  return (
    <>
    <div>SignIn page</div>
    <button onClick={googleSignInHandler}>Sign in with Google</button>
    </>
  )
}

export default SignIn