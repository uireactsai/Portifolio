import React from 'react'
import './About.css';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';
const About = () => {

  return (
    <div className='about-container'>
        {/* <div>About</div> */}
        <div className='head' >
            <h1 >ABOUT</h1>
            <p style={{width:'80%',fontSize:'2rem'}}>
                Hey! I'm Sai Subhash, a React.js developer with a passion for crafting sleek, performant web apps.
                 I focus on building interactive user interfaces with clean, maintainable code.
                  From optimizing front-end workflows to implementing cutting-edge features, I'm all about creating new web applications with newest features                  
                  Currently leveling up with learning backend by <b>Node.js and Express.js</b>
                  {/* advanced React patterns, Redux for state management, and exploring Next.js to push the boundaries of web performance. */}
                  
            </p>
        </div>
        <div>
      <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'I have experience in',
    1000,
    'I have experience in React.js',
    1000,
    'I have experience in javascript',
    1000,
    'I have experience in html&css',
    1000,
    'I have experience in Redux',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2rem' ,color:'white'}}
  repeat={Infinity}
/>
</div>
<div className='scrool-container'>
    <p>
      Click Here to view  &nbsp;
     <NavLink to={'/projects'} 
     style={{color:'#D1D2D3'}}
    //  style={({ isActive, isPending }) => ({
    //   fontWeight: isActive ? 'bold' : '',
    //   color: isPending ? 'purple' : 'white',})
    //  }
     >MY JOURNEY
     </NavLink>
      </p>
      
    </div>      
 </div>
  )
}

export default About