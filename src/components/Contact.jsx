import React from 'react'
import './Contact.css'
const Contact = () => {
    const socialLinks = [
        { icon: 'https://gmlconsult.com/wp-content/uploads/2021/10/Illustration-of-Linkedin-icon-on-transparent-background-PNG.png',
            link: '',
            label: 'LinkedIn' },
        { icon: 'https://th.bing.com/th/id/OIP.IIxh1JhqVj3FP-gqJzd5WAHaHk?rs=1&pid=ImgDetMain', 
            link: '',
             label: 'Discord' },
      ];

  return (
    <div className='contact-container'>
        <div className='head'>
            <h2>CONTACT ME</h2>
        </div>
        <div className='link-container'>{
            socialLinks.map((link,index)=>{
                return(
                    <div key={index} className='links' >
                        <a href={link.link}
                        // target="_blank" rel="noopener noreferrer"
                        className='link' >
                            {/* <i className={link.icon} />   */}
                            <img src={link.icon} 
                            alt={link.label}
                            style={{height:'50px',width:'50px'}}/>
                        </a>
                        </div>
                )
            })}
        </div>
        <div className='contact'>
            <p>Contact: +91 9849179931</p>
            <p> Email: <b>saisubhash300@gmail.com</b></p>
        </div>
        <div className='pdf-container'>
           {/* <p style={{color:'white'}}>For complete details Download my <b>RESUME</b></p> */}
           <b style={{color:'white'}} >For Further Details Download my RESUME</b>
           <a href="/Sai_Resume_React.js.pdf" download="Resume.pdf">
             HERE
            </a>
        </div>

    </div>
  )
}

export default Contact