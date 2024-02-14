//import React from 'react'
import './Nursing.css'
import { Link } from 'react-router-dom'
import img9 from '../Images/img9.webp' 
import img22 from '../Images/img22.jpg' 
import img23 from '../Images/img23.jpg' 
import img24 from '../Images/img24.jpg' 
import img25 from '../Images/img25.jpg' 
const Physicaltherapy = () => {
  return (
    <div>
        <center>
      <article className="articlen group">
  <img className="imagen right" src={img9} alt="Image"/>
  <section className="contentN">
    <h2 className="headlinen">Physical therapy for seniors is like a fitness program designed for the body&apos;s golden years. It&apos;s a personalized journey where caregivers act as wellness architects, guiding seniors through exercises that enhance mobility, flexibility, and strength. Picture it as a rejuvenating workout, specifically crafted to suit individual needs, fostering a sense of vitality and independence in the golden chapter of life.</h2>
    <p className='nursing'>
        <h2 className='sernur'>Services offered:</h2><br></br>
        Exercise Prescription<br></br>
        Strength Training<br></br>
        Pain Management<br></br>
        Pulmonary Rehabilitation<br></br>

    </p>
  </section>
</article>
</center>

<div className="site-contentn">
  <div className="rown">
    <div className="col-sm-4">
      <img src={img22} alt="" className="img-circle"/>
    </div>
    <div className="col-sm-8">
      <div className="description">
        <h2 className='hn'>Exercise Prescription</h2>
        <p className='np'>Developing an exercise prescription for seniors is much like customizing a fitness roadmap tailored to their individual requirements. It entails curating a specific regimen geared towards enhancing mobility and strength. Picture it as a unique fitness plan, carefully designed to boost overall well-being. These exercises go beyond mere physical activities; they serve as a deliberate prescription, promoting vitality and self-reliance. In essence, it ensures seniors engage in daily movement with ease and assurance.







</p>
        </div>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-8">
       <div className="description">
        <h2  className='hn'>Strength Training</h2>
        <p className='np'>Strengthening exercises for seniors are like constructing a resilient cornerstone for their physical health. This regimen focuses on specific activities crafted to boost muscle strength, fostering stability and independence across various daily activities. Envision it as a personalized fitness blueprint meticulously designed to fortify the body and enhance overall functionality in day-to-day life.</p>
        </div>
    </div>
    <div className="col-sm-4">
      <img src={img23} alt="" className="img-circle"/>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-4">
       <img src={img24} alt="" className="img-circle"/>
    </div>
    <div className="col-sm-8">
      <div className="description">
        <h2  className='hn'>Pain Management</h2>
        <p className='np'>Pain management for seniors is like providing a compass for navigating discomfort with care. Caregivers employ various strategies and exercises to alleviate pain, tailoring approaches to individual needs. Its about creating a roadmap that fosters relief, ensuring seniors experience comfort and an improved quality of life. Think of it as a personalized guide, offering effective methods to navigate and mitigate pain, allowing seniors to move forward with greater ease and well-being.</p>
        </div>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-8">
       <div className="description">
        <h2  className='hn'>Pulmonary Rehabilitation</h2>
        <p className='np'>Pulmonary rehabilitation for seniors is like a specialized fitness regimen tailored for improved breathing and respiratory health. This program involves targeted exercises and techniques designed to enhance lung capacity and overall respiratory function. Think of it as a personalized training plan, carefully crafted to optimize breathing and contribute to a more active and comfortable lifestyle. Its a tailored approach that empowers seniors to breathe easier and live life to the fullest.</p>
        </div>
    </div>
    <div className="col-sm-4">
      <img src={img25} alt="" className="img-circle"/>
    </div>
      
  </div>
  
</div>
<div className="button-box">
                <Link to="/Booking"><button className="twenty-one"><span>Click here to book</span></button></Link>
            </div>
<br></br>
<br></br>

    </div>
  )
}

export default Physicaltherapy