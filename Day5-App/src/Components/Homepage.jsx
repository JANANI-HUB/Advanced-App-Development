//import React from 'react'
import './Homepage.css';
import img2 from '../Images/img2.jpg'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'
import img5 from '../Images/img5.png'
import img6 from '../Images/img6.png'
import img7 from '../Images/img7.jpg'
import img8 from '../Images/img8.jpg'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    
<div>

  <body>
    <main>
      <header className='hheader'>
        <nav>
          
            <Link to="/Admin"><a href="#bio">Home</a></Link>
            <Link to="/Aboutus"><a href="#aboutus">About Us</a></Link>
            <a href="#services">Services</a>
            <Link to="/Contact"><a href="#contact">Contact</a></Link>
          <Link to="/Booking"><a href="#booking">Booking</a></Link>
           
          
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
        <img className="img2" src={img3}></img>
        
        
 
      </div>
      
    
      <p className="phome"><a id="return-to-top" href="#top">(Return to Top)</a></p>
      
      <div id="services">
        <h2 className="h2home">Services we offer</h2>
        
        
      </div>
      <div className="hover01 column">
      <div id="gallery">
        
      
  
      <figure className="figure-with-text">
            <img className="imghome" src={img4} alt="" />
            <div className="text-over-image">
              <Link to="/Nursing"><p className="pn">NURSING</p></Link>
            </div>
          </figure>
          <figure className="figure-with-text">
            <img className="imghome1" src={img8} alt="" />
            <div className="text-over-image">
            <Link to="/Personalcare"><p className="pn">PERSONAL CARE</p></Link>
            </div>
          </figure>

          <figure className="figure-with-text">
            <img className="imghome2" src={img5} alt="" />
            <div className="text-over-image">
            <Link to="/Medication"> <p className="pn">MEDICATION</p></Link>
            </div>
          </figure>

          <figure className="figure-with-text">
            <img className="imghome2" src={img6} alt="" />
            <div className="text-over-image">
              <Link to="/Physicaltherapy"><p className="pn">PHYSICAL THERAPY</p></Link>
            </div>
          </figure>

          <figure className="figure-with-text">
            <img className="imghome5" src={img7} alt="" />
            <div className="text-over-image">
              <Link to="/Companion"><p className="pn">COMPANIONSHIP</p></Link>
            </div>
          </figure>
        
  
  
        
        
      </div>
      </div>
      <p className="phome"><a id="return-to-top" href="#top">(Return to Top)</a></p>


      
</main>
  </body>

</div>
       
    
  )
}

export default Homepage