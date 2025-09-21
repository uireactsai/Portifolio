import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Projects = () => {
  return (
    <div style={{background:'#6D6C6C',minHeight:'fit-content',paddingBottom:'1rem'}} >

    <VerticalTimeline>

      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="jun 2024 - present"
    iconStyle={{ background: '#282625', color: '#fff' }}
    icon={
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '100%', height: '100%'}}>
   <img src='https://th.bing.com/th/id/OIP.WQ6tNkF9nhI0M6wCH4ZW_wHaHa?rs=1&pid=ImgDetMain'
      alt='Aja logo' style={{height:'90%',width:'90%',borderRadius:'48%' }}/>
      </div>
      }
  >
    <h3 className="vertical-timeline-element-title">AJA CS LLP</h3>
    <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
    <p> Currently working as a <b> Software Developer in AjA cs llp Hyderabad </b>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Mar 2024"
    iconStyle={{ background: '#CECECE' }}
    icon={
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '100%', height: '100%'}}>
 <img src='https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260'
    alt='tcs logo' style={{height:'70%',width:'70%' }}/>
    </div>
    }
  >
    <h3 className="vertical-timeline-element-title">TCS </h3>
    <h4 className="vertical-timeline-element-subtitle"> Systems Engineer</h4>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#E8E4E3', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">A.O.S -Apple Online Store </h3>
    <h4 className="vertical-timeline-element-subtitle"> </h4>
    <p>
    Apple online store is focused on delivering an enhanced and  
    seamless digital shopping experience and catering to millions of 	
    users world wide. 
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: '#E8E4E3', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Resourse Management </h3>
    <h4 className="vertical-timeline-element-subtitle">Internal Portal</h4>
    <p>
    Employee Project Management System is a web based application for an Tcs internal project where an employee can raise a
     request for their requirements such as their preferred technology and preferred location. </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Dec 2021"
    iconStyle={{ background: '#CECECE', color: '#fff' }}
    icon={
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '100%', height: '100%'}}>
 <img src='https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1631949260'
    alt='tcs logo' style={{height:'68%',width:'68%'}}/>
    </div>
    }
  >
    <h3 className="vertical-timeline-element-title">TCS-TATA CONSULTANCY SERVICES </h3>
    <p>
      Joined TATA CONSULTANCY SERVICES as a Assistant System Engineer 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2017-2021"
    iconStyle={{ background: '#000' }}
    icon={
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', width: '100%', height: '100%'}}>
 <img src='./srkr.jpg'
    alt='srkr logo' style={{height:'90%',width:'90%',borderRadius:'48%'}}/>
    </div>
    }
>
    <h3 className="vertical-timeline-element-title">SRKR ENGINEERING COLLEGE</h3>
    <h4 className="vertical-timeline-element-subtitle">EEE-ELECTRICAL AND ELECTRONICS ENGINEERING</h4>
    <p>
      Graduation in the stream of EEE
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
    </div>
  )
}

export default Projects