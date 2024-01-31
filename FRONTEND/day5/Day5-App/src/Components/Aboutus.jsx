//import React from 'react'
import './Aboutus.css'
import img27 from '../Images/img27.webp'
import img28 from '../Images/img28.jpg'
import img29 from '../Images/img29.jpg'
import img30 from '../Images/img30.webp'
import img31 from '../Images/img31.jpg'


const Aboutus = () => {
  return (
    <div>
        <div className="we-are-block">

<div id="about-us-section">

  <div className="about-us-image">

    <img src={img27} width="808" height="458" alt="Lobby Image"/>

  </div>

  <div className="about-us-info">

    <h2 className='h2ab'>About Us</h2>

    <p className="abp">Welcome to [Your Company Name], Your Trusted Partner in Home Care!

At [Your Company Name], we understand that every individual deserves the highest quality of care and support, especially in the comfort of their own home. Established with a commitment to excellence, we take pride in being a leading provider of personalized home care services.</p>

  

  </div>

</div>

<div id="history-section">

  <div className="history-image">

    <img src={img28} width="951" height="471" alt="Building Pic"/>

  </div>

  <div className="history-info">

    <h2 className='h2ab'>Our Mission</h2>

    <p className='abp'>Empowering Independence, Enhancing Lives. <br></br>
    Our mission is to enrich the lives of our clients by delivering compassionate, reliable, and tailored home care solutions. We believe in fostering independence, dignity, and a sense of well-being for every individual under our care.</p>

    

  </div>

</div>

</div>
<h2 className='h2ab' style={{paddingTop:50}}>Caregivers</h2>
<div id="about">
  <div className="about nur1">
    <img className="abimg"src={img29} alt=""/>
    <h2 className="h2ab">Shawna Grant</h2>
    <center>
    <p className='abp'>
     An experienced caregiver
    </p></center>

  </div>
  <div className="about nur2">
    <img className="abimg" src={img30} alt=""/>
    <h2 className="h2ab">Gary</h2><center>
    <p className='abp'>An experienced caregiver
    </p></center>
  </div>
  <div className="about nur3">
    <img className="abimg" src={img31} alt=""/>
    <h2 className="h2ab">Sarah</h2>
    <center><p className='abp'>
      An experienced caregiver
    </p></center>
  </div>
</div>

<br></br>
<div className="about-section">
  <div className="inner-container">
    <h2 className='text'>Why Choose Us?</h2>
    <p className="abp">
      Home Care as Easy as 1-2-3<br></br>
      24/7 Availability<br></br>
      Free in Home Assessment<br></br>
      Employee Model Agency<br></br>
      Comfort Match Guarantee<br></br>
      Bonded and Qualified Caregivers<br></br>
    </p>
    
  </div>
</div>



	
		
		

    </div>
  )
}

export default Aboutus