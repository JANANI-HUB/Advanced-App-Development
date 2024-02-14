//import React from 'react'
import './Nursing.css'
import { Link } from 'react-router-dom'
import img9 from '../Images/img9.webp' 
import img10 from '../Images/img10.webp' 
import img11 from '../Images/img11.jpg' 
import img12 from '../Images/img12.jpg' 
import img13 from '../Images/img13.jpeg' 
const Companion = () => {
  return (
    <div>
        <center>
      <article className="articlen group">
  <img className="imagen right" src={img9} alt="Image"/>
  <section className="contentN">
    <h2 className="headlinen">Companionship for seniors in home care services is like having a friendly presence that brightens each day. Caregivers provide not just assistance but also meaningful social interaction and emotional support. It involves engaging in conversations, sharing activities, and fostering a genuine connection. This service is more than just a comforting presence; its a way to alleviate loneliness and enhance the overall well-being of seniors, creating a warm and supportive environment within the familiarity of their own homes.</h2>
    <p className='nursing'>
        <h2 className='sernur'>Services offered:</h2><br></br>
        Conversation and Social Interaction<br></br>
        Outdoor Strolls<br></br>
        Pet Companionship<br></br>
        Technology Assistance<br></br>

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
        <h2 className='hn'>Conversation and Social Interaction</h2>
        <p className='np'>Conversation and social interaction for seniors are like opening windows to a world of connection and warmth. Caregivers engage in meaningful conversations, providing not just words but a genuine presence. Its about sharing stories, laughter, and companionship, creating a social environment that combats loneliness and fosters emotional well-being. These interactions go beyond words; they form the fabric of relationships, promoting a sense of connection and joy within the home care setting.







</p>
        </div>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-8">
       <div className="description">
        <h2  className='hn'>Outdoor Strolls</h2>
        <p className='np'>Outdoor strolls for seniors are akin to taking a leisurely journey through nature&apos;s embrace. Caregivers accompany seniors on walks, allowing them to bask in the fresh air and sunlight. Its more than just physical activity; its an opportunity to connect with the outdoors, rejuvenate the senses, and enjoy the beauty of nature. These strolls provide not only exercise but also a peaceful and uplifting experience.</p>
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
        <h2  className='hn'>Pet Companionship</h2>
        <p className='np'>Pet companionship for seniors is like having a loyal and furry friend to share life&apos;s moments. Caregivers encourage interaction with pets, recognizing the therapeutic benefits of companionship. Whether its the joy of play, the comfort of a warm presence, or the simple pleasure of a gentle nuzzle, pets provide not just company but also emotional support. Its a heartwarming connection that enhances the well-being of seniors, offering a source of joy, comfort, and unconditional companionship within the familiar surroundings of home.</p>
        </div>
    </div>
  </div>
    <div className="rown">
     <div className="col-sm-8">
       <div className="description">
        <h2  className='hn'>Technology Assistance</h2>
        <p className='np'>Technology assistance for seniors in home care is like having a patient and helpful guide to navigate the digital world. Caregivers offer support in using devices like smartphones, tablets, or computers to connect with loved ones, access information, or engage in online activities. Think of it as a friendly hand to help seniors feel comfortable and confident with technology, opening doors to new opportunities for communication and connection. Its a personalized approach that empowers seniors to stay connected and engaged in todays digital age..</p>
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

export default Companion