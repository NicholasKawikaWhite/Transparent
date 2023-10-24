import React from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'

const Home = () => {
  return (
    <>
{onAuthStateChanged(auth, (user) => {
  if(user){
    <>
    <p>Signed In</p>
    </>
  }else{
    <>
    <p>Signed Out</p>
    </>
  }
})}
    </>
  )
}

export default Home
