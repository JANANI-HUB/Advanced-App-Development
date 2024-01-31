//import React from 'react'
import './Nursing.css'
import { Link } from 'react-router-dom'
import img9 from '../Images/img9.webp' 
import img10 from '../Images/img10.webp' 
import img11 from '../Images/img11.jpg' 
import img12 from '../Images/img12.jpg' 
import img13 from '../Images/img13.jpeg' 
const Nursing = () => {
  return (
    <div>
    
        <center>
      <article className="articlen group">
  <img className="imagen right" src={img9} alt="Image"/>
  <section className="contentN">
    <h2 className="headlinen">Nursing for seniors is a specialized field providing tailored care for the elderly.The goal is to enhance seniors well-being and independence, ensuring they receive comprehensive and compassionate care within their familiar environment.</h2>
    <p className='nursing'>
        <h2 className='sernur'>Services offered:</h2><br></br>
        Skilled Nursing Care<br></br>
        Wound Care<br></br>
        Assistance with Activities of Daily Living<br></br>
        Health Monitoring<br></br>

    </p>
  </section>
</article>
</center>

<div className="site-contentn">
  <div className="rown">
    <div className="col-sm-4">
      <img src={img10} alt="" className="img-circle"/>
    </div>
    <div className="col-sm-8">
      <div className="description">
        <h2 className='hn'>Skilled Nursing Care</h2>
        <p className='np'>Skilled nursing care is like having a healthcare expert right at your side. The nurses are trained to dive deep into your health needs, creating plans and delivering top-notch care. From managing medications to keeping an eye on vital signs, they handle the nitty-gritty of your health. Its not just about basics these professionals deal with complex medical situations. Whether its coordinating treatments, doing health check-ups, or giving specialized care, skilled nursing is your go-to for personalized, advanced healthcare that goes the extra mile.







</p>
        </div>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-8">
       <div className="description">
        <h2  className='hn'>Wound Care</h2>
        <p className='np'>Wound care is all about giving TLC &apos;Tender Loving Care&apos; to those bumps, cuts, or more serious injuries. It&apos;s like giving your body a little extra help to heal properly. Nurses clean up the wound, apply the right dressings, and keep a close watch on how it&apos;s all coming together. It&apos;s not just a patch job – it&apos;s a careful process to make sure everything heals up just right, preventing infections and promoting recovery. So, whether it&apos;s a small scrape or a more significant injury, wound care is like your personal health guardian, making sure you are on the road to healing.</p>
        </div>
    </div>
    <div className="col-sm-4">
      <img src={img11} alt="" className="img-circle"/>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-4">
       <img src={img12} alt="" className="img-circle"/>
    </div>
    <div className="col-sm-8">
      <div className="description">
        <h2  className='hn'>Assistance with Activities of Daily Living</h2>
        <p className='np'>Assistance with activities of daily living (ADLs) is like having a supportive friend to lend a hand with life&apos;s daily routines. Whether it&apos;s getting dressed, taking a shower, or moving around, this kind of care is there to make each day a bit easier. It&apos;s not just about physical help; it&apos;s about maintaining dignity and independence. Picture having someone by your side, ensuring you can navigate these everyday tasks with ease and comfort. ADL assistance is like having a friendly ally, making sure you can tackle your day with a smile..</p>
        </div>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-8">
       <div className="description">
        <h2  className='hn'>Health Monitoring</h2>
        <p className='np'>Health monitoring is like having a personal health detective always keeping an eye on your well-being. It involves regular check-ups and observations to track how your body is doing. From measuring vital signs like heart rate and blood pressure to assessing overall health, it&apos;s a proactive approach to catch any changes early on. Think of it as a personalized health radar, providing insights and ensuring that you stay on the path to wellness. Health monitoring is like having a constant companion, quietly working to keep you in the best possible shape.</p>
        </div>
    </div>
    <div className="col-sm-4">
      <img src={img13} alt="" className="img-circle"/>
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

export default Nursing