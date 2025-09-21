import React from 'react'
import './About.css';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';
const About = () => {

  return (
    <div className='about-container'>
        {/* <div>About</div> */}
        <div className='head' >
            <h1>ABOUT</h1>
            {/* <p style={{fontSize:'2rem'}}>
            Hi, I'm Sai Subhash
            </p> */}
            <p style={{width:'80%',fontSize:'2rem'}}>
Developer driven by the pursuit of crafting dynamic, high-performance web applications.
<br/> I focus on delivering seamless user experiences with efficient, scalable code.
<br/>Currently enhancing my backend expertise with Node.js and Express.js to evolve into a full-stack developer. 
<br/>I thrive in collaborative environments, building solutions that merge innovation with functionality.
<br/>Core Skills: React.js, Redux, JavaScript (ES6+),HTML,CSS, Node.js, Express.js, API Development, Responsive Design.
<br/>
Let's collaborate and bring impactful ideas to life!
            </p>
        </div>
        <div className='sub'>
      <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'I am experienced in',
    1000,
    'I am experienced in React.js',
    1000,
    'I am experienced in javascript',
    1000,
    'I am experienced in html&css',
    1000,
    'I am experienced in Redux Tool Kit',
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
     style={{color:'#B7AEAB',fontSize:'2rem'}}
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