import React, { useContext } from 'react'
import { useState } from 'react'
import { Context } from '../App'

function Button() {
    const [isSignedIn, setIsSignedIn] = useContext(Context)

  return (
    <button onClick={()=> setIsSignedIn(!isSignedIn)}>
        {isSignedIn ? 'Sign out' : 'Sign in'}
    </button>
  )
}

export default Button