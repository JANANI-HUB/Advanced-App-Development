//import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div>
      
      <div className="contactback">
        <form className="formcontact">
          <h2 className="contactus">CONTACT US</h2>
          <p type="Name:" className="conp">
            <input
              placeholder="Write your name here.."
              className="contactinp"
            />
          </p>
          <p type="Email:" className="conp">
            <input
              placeholder="Let us know how to contact you back.."
              className="contactinp"
              
            />
          </p>
          <p type="Message:" className="conp">
            <input
              placeholder="What would you like to tell us.."
              className="contactinp"
              
            />
          </p>
          <button className="conbutton" type="submit">
            Send Message
          </button>
          <p className="conp2">Contact: 1234567894&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: livetix@gmail.com</p>
        </form>
      </div>
    </div>
  )
}

export default Contact