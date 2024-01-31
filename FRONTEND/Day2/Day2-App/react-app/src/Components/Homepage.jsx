//import React from 'react'
import './Homepage.css';
import img2 from '../Images/img2.webp'
const Homepage = () => {
  return (
    
<div>

  <body>
    <main>
      <header>
        <nav>
          <ul id="nav">
            <li><a href="#bio">Home</a></li>
            <li><a href="#courses-introduction">About Us</a></li>
            <li><a href="#blog-introduction">Services</a></li>
            <li><a href="#books-introduction">Appointments</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#booking">Booking</a></li>
           
          </ul>
        </nav>
        
      </header> 
      <div id="img-div">
        
        <img className="img-3" src={img2} alt="" align="right"/>
      </div>
      <div id="bio">
      <h1 className="hhome">
  <span></span>
  <span>The </span>&nbsp;
  <span>closest</span>&nbsp;
  <span>thing</span>&nbsp;
  <span>to</span>&nbsp;
  <span>being</span>&nbsp;
  <span>cared</span>&nbsp;
  <span>for</span>&nbsp;
  <span>is</span>&nbsp;
  <span>to</span>&nbsp;
  <span>care</span>&nbsp;
  <span>for</span>&nbsp;
  <span>someone</span>&nbsp;
  <span>else...</span>&nbsp;
</h1>
  <p className='ph'>Our unwavering commitment is to deliver exceptional home care services that prioritize the well-being, dignity, and comfort of our clients. We believe in fostering a supportive and compassionate environment, where our experienced team goes above and beyond to ensure personalized, high-quality care tailored to meet the unique needs of each individual. With a dedication to excellence and a passion for enhancing the quality of life, we are your trusted partners in providing the utmost standard in home care services.</p>
        
      </div>
      
    
      <p className="phome"><a id="return-to-top" href="#top">(Return to Top)</a></p>
      
      <div id="blog-introduction">
        <h2 className="h2home">Services we offer</h2>
        
        
      </div>
      
</main>
  </body>

</div>
       
    
  )
}

export default Homepage