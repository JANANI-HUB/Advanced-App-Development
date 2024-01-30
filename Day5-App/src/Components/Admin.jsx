//import React from 'react'
import './Admin.css';
const Admin = () => {
  return (
    <div>
        <div className='adminback'>
        <header className='adminheader'>
  <nav className='adminnav'>
    <a href="#add" >Add Service</a>
    <a href="#edit">Edit Service</a>
    <a href="#view">View Services</a>
    <a href="#delete">Delete Service</a>
  </nav>
   
  </header>
  </div>
<br></br><br></br><br></br>
<div className='addback'>
<div className="adds">
  <section id="add" className='adminsection'>
    <center>
    <h2 className='h2ad'>Add Home Care Service</h2>
    </center>
    <form className='adminform'>
      <label htmlFor="serviceName" className='labelad'>Service Name:</label>
      <input type="text" id="serviceName" name="serviceName" required className='admininput'/>

      <label htmlFor="serviceName" className='labelad'>Service Provider(Caregiver) Name:</label>
      <input type="text" id="serviceName" name="serviceName" required className='admininput'/>

      <label htmlFor="servicePrice" className='labelad'>Service Price:</label>
      <input type="number" id="servicePrice" name="servicePrice" min="0" required className='admininput'/>

      <label htmlFor="serviceDuration" className='labelad'>Service Duration (hours):</label>
      <input type="number" id="serviceDuration" name="serviceDuration" min="1" required className='admininput'/>

      <label htmlFor="serviceAvailability" className='labelad'>Service Availability:</label>
      <input type="text" id="serviceAvailability" name="serviceAvailability" required className='admininput'/>

      <label htmlFor="serviceNumOfDays" className='labelad'>Number of Days of Service:</label>
      <input type="number" id="serviceNumOfDays" name="serviceNumOfDays" min="1" required className='admininput'/>
    


      <br></br><br></br>
      <button type="submit" className='adminbutton'>Add Service</button>
    </form>
  </section>
  </div>
  </div>
  <br></br><br></br><br></br>
<div className='editback'>
<div className='edits'>
  <section id="edit">
    <center>
    <h2 className='h2ad'>Edit Home Care Service</h2>
</center>
    <form className='adminform'>
      <label htmlFor="serviceName" className='labelad'>Service Name:</label>
      <input type="text" id="serviceName" name="serviceName" required className='admininput'/>
      <label htmlFor="serviceName" className='labelad'>Service Provider(Caregiver) Name:</label>
      <input type="text" id="serviceName" name="serviceName" required className='admininput'/>

      <label htmlFor="servicePrice" className='labelad'>Service Price:</label>
      <input type="number" id="servicePrice" name="servicePrice" min="0" required className='admininput'/>

      <label htmlFor="serviceDuration" className='labelad'>Service Duration (hours):</label>
      <input type="number" id="serviceDuration" name="serviceDuration" min="1" required className='admininput'/>

      <label htmlFor="serviceAvailability" className='labelad'>Service Availability:</label>
      <input type="text" id="serviceAvailability" name="serviceAvailability" required className='admininput'/>

      <label htmlFor="serviceNumOfDays" className='labelad'>Number of Days of Service:</label>
      <input type="number" id="serviceNumOfDays" name="serviceNumOfDays" min="1" required className='admininput'/>
<br></br><br></br>
      <button type="submit" className='adminbutton'>Edit Service</button>
    </form>
   
  </section>
  </div></div>

  <br></br><br></br><br></br>
<div className="viewback">
<div className="views">

  <section id="view">
    <center>
    <h2 className='h2ad'>View Home Care Services</h2>
    </center>
    <table className='admintable'>
      <tr>
        <th>Service ID</th>
        <th>Service Name</th>
        <th>Service Provider (Craegiver) Name</th>
        <th>Service Price</th>
        <th>Service Duration</th>
        <th>Service Availability</th>
        <th>No of Days of Service</th>
       
      </tr>
      
    </table>
  </section>
  </div></div>
  <br></br><br></br><br></br>
  <div className='deleteback'>
<div className="deletes">
  <section id="delete">
    <center>
    <h2 className='h2ad'>Delete Home Care Service</h2>
    </center>
    <form className='adminform'>
      <label htmlFor="serviceName" className='labelad'>Service Name:</label>
      <input type="text" id="serviceName" name="serviceName" required className='admininput'/>
      <br></br><br></br>
      <button type="submit" className='adminbutton'>Delete Service</button>
    </form>
  </section>
  
  </div></div>
    </div>
  )
}

export default Admin