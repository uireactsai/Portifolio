import React, { useState } from 'react';
// import './TechSlack.css';
import './TechSlack2.css';
const TechSlack = () => {
    const techs=[
        {src:'https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png',
            desc:'Used React for different ui screens development'
        },
        {src:'https://th.bing.com/th/id/R.35fde9e2f21022536029356e95c86faa?rik=tKrXgn2dvVJqAw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flogo-javascript-png-javascript-ile-twitter-retweet-uygulamas-833.png&ehk=EYrDqaaPfX6%2fHeLEOTnVTnshumwnFWj06e8qHpLVHko%3d&risl=&pid=ImgRaw&r=0',
            desc:'Javascript-es6 the main scripting language'
        },
        {src:'https://icon-library.com/images/2018/2844448_css3-logo-html-css-hd-png-download.png',
            desc:'HTML and CSS for skelton and styling of application '
        },
        {src:'https://th.bing.com/th/id/OIP.mDBmQh_-PLFtRRovcbCqkgAAAA?rs=1&pid=ImgDetMain',
            desc:'Used React-Redux Tool Kit for global State management'
        },
        {src:'https://wallpaperaccess.com/full/3909250.png',
            desc:'have Good knowledge on  Node js and Express.js'
        },
        {src:'https://th.bing.com/th/id/OIP.RxYh9DLkBUwJe3Gpf9yQXwHaGm?w=175&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
            desc:'MaterialUi Library for faster development'
        },
        {src:'https://blog.logrocket.com/wp-content/uploads/2021/07/using-chartjs-react.png',
            desc:'React Chart2.js for more modern charts representation  of data '
        },
        {src:'https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png',
            desc:'React Query for faster API Integration'
        }
       
    ];

    const [selected, setSelected] = useState(null);

  const handleClick = (tech) => {
    setSelected(tech);
  };

  const closePopup = () => {
    setSelected(null);    
  };


  return (
    <div className='tech-container'>
       <div className='head'>
        <h1 style={{color:'white'}}>
            Tech Stack</h1>
       </div>
        
        <div className='tech'>{
            techs.map((tech,index)=>{
                return(
                <div className="tech-item" key={index}>
                    <img src={tech.src} 
                    alt='tech Images'
                     onClick={() => handleClick(tech)}/>
                    </div>
                )
            })
            }
        </div>

            {selected && (
                <div>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <img src={selected.src} alt='selectedimage' className='.popup img' />
            <p>{selected.desc}</p>
            <button onClick={closePopup}>Close</button>
          </div>
          </div>
      )}
    </div>
  )
}

export default TechSlack