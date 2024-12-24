import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Main.css'
const Main = () => {
    const navigate = useNavigate();

    const handleNext=()=>{
        navigate('/home')
    };
    useEffect(() => {
      const timestamp = Date.now();
      const dynamicMaskUrl = `url('/black.gif?${timestamp}')`;

      document.documentElement.style.setProperty('--dynamic-mask', dynamicMaskUrl);

    }, []);
   
  return (
    <div className='banner'>
        <div className='content'>
            <div className='title'>Welcome</div>
            <p>This Portifolio is an part of challenge where this is build in an 4hrs timespan </p>
            <button onClick={handleNext}>go to Portfolio</button>
        </div>
    </div>
  )
}

export default Main
