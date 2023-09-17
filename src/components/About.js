import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'

const About = () => {
  return (
    <div>
    <h1>About Us</h1>
    <p>
    This is the Namaste React Course Chapter 07-Finding the path
    </p>
    {/* <Outlet/> */}
    <Profile/>
    </div>
  )
}

export default About