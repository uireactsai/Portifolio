import React from 'react'
import Hero from '../Hero'
import About from '../About'
import TechSlack from '../TechSlack'
import Contact from '../Contact'
import NavBar from '../NavBar'

const Home = () => {
  
  return (
    <div>
      <NavBar/>
      <div id='hero'>
        <Hero/>
      </div>
      <div id='about'>
         <About/>
      </div>
       <div id='tech'>
          <TechSlack/>
       </div>
       <div id='contact'>
        <Contact/>
       </div>
    </div>
  )
}

export default Home