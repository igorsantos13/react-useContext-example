import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

export const Context = React.createContext();

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false)
  

  return (
    <>
    <Context.Provider value={[isSignedIn, setIsSignedIn]}>
      <Navbar />
      <h1>{isSignedIn ? 'Signed in' : 'Sign out'}</h1>

    </Context.Provider>
    </>
  )
}

export default App
