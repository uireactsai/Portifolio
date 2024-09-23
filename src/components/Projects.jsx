import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Projects = () => {
  return (
    <div style={{background:'rgb(247, 231, 231'}}>

    <VerticalTimeline>

      <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="jun 2024 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    // icon={<p>hi</p>}
  >
    <h3 className="vertical-timeline-element-title">AJA CS LLP</h3>
    <h4 className="vertical-timeline-element-subtitle">UI Developer</h4>
    <p> Currently working as a <b> UI Developer </b>
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Mar 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<p>hi</p>}
  >
    <h3 className="vertical-timeline-element-title">TCS </h3>
    <h4 className="vertical-timeline-element-subtitle">Assistant System Engineer</h4>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
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
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">Resourse Management </h3>
    <h4 className="vertical-timeline-element-subtitle">Internal Speed Portal</h4>
    <p>
    Employee Project Management System is a web based application for an Tcs internal project where an employee can raise a
     request for their requirements such as their preferred technology and preferred location. The raised request goes to
      the RMG (Resource management group) and admin department with the submission of the request the projects gets assigned
       by the rmg team which was approved and finally the request gets closed by the admin team.  
       </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Dec 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">TCS </h3>
    <p>
      Joined TATA COUNSULTANCY SERVICES as a fresher 
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2017-2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
  >
    <h3 className="vertical-timeline-element-title">SRKR ENGINEERING COLLEGE</h3>
    <h4 className="vertical-timeline-element-subtitle">EEE-ELECTRICAL AND ELECTRONICS ENGINEERING</h4>
    <p>
      Completed graduation in the stream of EEE
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
    </div>
  )
}

export default Projects