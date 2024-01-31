//import React from 'react'
import './Nursing.css'
import { Link } from 'react-router-dom'
import img9 from '../Images/img9.webp' 


import img14 from '../Images/img14.jpg' 
import img15 from '../Images/img15.jpg' 
import img16 from '../Images/img16.jpg' 
import img17 from '../Images/img17.webp' 
const Personalcare = () => {
  return (
    <div>
        <center>
      <article className="articlen group">
  <img className="imagen right" src={img9} alt="Image"/>
  <section className="contentN">
    <h2 className="headlinen">In a home care setting for seniors, personal care is like having a customized support system that takes care of each person&apos;s unique needs. It&apos;s more than just basic help – it includes assistance with everyday tasks such as getting ready, dressing, and moving around. This personalized care aims to create a calm and considerate environment, helping seniors be independent and manage their daily routines smoothly. The focus is on making sure seniors feel content, respected, and receive individualized support to make each day more comfortable and enjoyable.</h2>
    <p className='nursing'>
        <h2 className='sernur'>Services offered:</h2><br></br>
        Toileting,Bathing,Dressing and Hygiene Assistance<br></br>
        Meal Preparation and Feeding Assistance<br></br>
        Transportation Assistance<br></br>
        Family Communication<br></br>

    </p>
  </section>
</article>
</center>

<div className="site-contentn">
  <div className="rown">
    <div className="col-sm-4">
      <img src={img14} alt="" className="img-circle"/>
    </div>
    <div className="col-sm-8">
      <div className="description">
        <h2 className='hn'>Toileting,Bathing,Dressing and Hygiene Assistance</h2>
        <p className='np'>Assisting seniors with toileting involves providing dignified support for bathroom needs. Bathing assistance ensures a safe and comfortable experience, while dressing aid helps in choosing and donning appropriate clothing. Hygiene assistance encompasses overall cleanliness, including oral care and skincare. These personalized services aim to maintain seniors dignity and well-being in their daily routines.







</p>
        </div>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-8">
       <div className="description">
        <h2  className='hn'>Meal Preparation and Feeding Assistance</h2>
        <p className='np'>Meal preparation and feeding assistance for seniors are like having a helping hand to make sure they enjoy nutritious and delicious meals. It involves planning and cooking meals tailored to their preferences and dietary needs. Feeding assistance ensures that they have the support they need during mealtimes, making sure they get the nourishment required for their well-being. It&apos;s not just about the food; it&apos;s a thoughtful way to enhance their daily experience, providing both sustenance and a sense of care.</p>
        </div>
    </div>
    <div className="col-sm-4">
      <img src={img15} alt="" className="img-circle"/>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-4">
       <img src={img16} alt="" className="img-circle"/>
    </div>
    <div className="col-sm-8">
      <div className="description">
        <h2  className='hn'>Transportation Assistance</h2>
        <p className='np'>Transportation assistance for seniors is like having a reliable companion to ensure they can easily access essential services and enjoy social activities. It involves providing support for getting to medical appointments, grocery shopping, or social outings. This service not only ensures their physical mobility but also contributes to their social well-being by keeping them engaged in the community. It&apos;s a personalized and considerate way to enhance their independence and quality of life, ensuring they can participate in various activities with ease and convenience.</p>
        </div>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-8">
       <div className="description">
        <h2  className='hn'>Family Communication</h2>
        <p className='np'>Family communication in caregiving is akin to maintaining an open and supportive dialogue about the senior&apos;s health and any potential concerns. It involves regular updates to keep family members informed, ensuring everyone is on the same page regarding the well-being of their loved one. This transparent and compassionate approach fosters a collaborative environment, allowing family members to be actively involved in decisions and providing peace of mind by staying connected and informed about the care and condition of their senior family member.</p>
        </div>
    </div>
    <div className="col-sm-4">
      <img src={img17} alt="" className="img-circle"/>
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

export default Personalcare