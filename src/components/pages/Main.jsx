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
            <p>This Portfolio is an part of a one day build challenge</p>
              <button onClick={handleNext}
               style={{ backgroundColor:'#000',
               color:'#fff',
               borderRadius:'10%'
               }}>
               Click Here
                </button> 
        </div>
    </div>
  )
}

export default Main
