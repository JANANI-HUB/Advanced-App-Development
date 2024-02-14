//import React from 'react'
// import './Admin.css';
// const Admin = () => {
//   return (
//     <div>
//         <div className='adminback'>
//         <header className='adminheader'>
//   <nav className='adminnav'>
//     <a href="#add">Add Service</a>
//     <a href="#edit">Edit Service</a>
//     <a href="#view">View Services</a>
//     <a href="#delete">Delete Service</a>
//   </nav>
   
//   </header>
//   <div className='admins'>
//     <p className='pad'>&apos;Administering care with heart and technology hand in hand.&apos;
//     <br></br><br></br>
//     <p className='pc'>Click above or scroll down to add,edit or delete services...</p></p>
//   </div>
//   </div>
// <br></br><br></br><br></br>
// <div className='addback'>
// <div className="adds">
//   <section id="add" className='adminsection'>
//     <center>
//     <h2 className='h2ad'>Add Home Care Service</h2>
//     </center>
//     <form className='adminform'>
//       <label htmlFor="serviceName" className='labelad'>Service Name:</label>
//       <input type="text" id="serviceName" name="serviceName" required className='admininput'/>

//       <label htmlFor="serviceName" className='labelad'>Service Provider(Caregiver) Name:</label>
//       <input type="text" id="serviceName" name="serviceName" required className='admininput'/>

//       <label htmlFor="servicePrice" className='labelad'>Service Price:</label>
//       <input type="number" id="servicePrice" name="servicePrice" min="0" required className='admininput'/>

//       <label htmlFor="serviceDuration" className='labelad'>Service Duration (hours):</label>
//       <input type="number" id="serviceDuration" name="serviceDuration" min="1" required className='admininput'/>

//       <label htmlFor="serviceAvailability" className='labelad'>Service Availability:</label>
//       <input type="text" id="serviceAvailability" name="serviceAvailability" required className='admininput'/>

//       <label htmlFor="serviceNumOfDays" className='labelad'>Number of Days of Service:</label>
//       <input type="number" id="serviceNumOfDays" name="serviceNumOfDays" min="1" required className='admininput'/>
    


//       <br></br><br></br>
//       <button type="submit" className='adminbutton'>Add Service</button>
//     </form>
//   </section>
//   </div>
//   </div>
//   <br></br><br></br><br></br>
// <div className='editback'>
// <div className='edits'>
//   <section id="edit">
//     <center>
//     <h2 className='h2ad'>Edit Home Care Service</h2>
// </center>
//     <form className='adminform'>
//       <label htmlFor="serviceName" className='labelad'>Service Name:</label>
//       <input type="text" id="serviceName" name="serviceName" required className='admininput'/>
//       <label htmlFor="serviceName" className='labelad'>Service Provider(Caregiver) Name:</label>
//       <input type="text" id="serviceName" name="serviceName" required className='admininput'/>

//       <label htmlFor="servicePrice" className='labelad'>Service Price:</label>
//       <input type="number" id="servicePrice" name="servicePrice" min="0" required className='admininput'/>

//       <label htmlFor="serviceDuration" className='labelad'>Service Duration (hours):</label>
//       <input type="number" id="serviceDuration" name="serviceDuration" min="1" required className='admininput'/>

//       <label htmlFor="serviceAvailability" className='labelad'>Service Availability:</label>
//       <input type="text" id="serviceAvailability" name="serviceAvailability" required className='admininput'/>

//       <label htmlFor="serviceNumOfDays" className='labelad'>Number of Days of Service:</label>
//       <input type="number" id="serviceNumOfDays" name="serviceNumOfDays" min="1" required className='admininput'/>
// <br></br><br></br>
//       <button type="submit" className='adminbutton'>Edit Service</button>
//     </form>
   
//   </section>
//   </div></div>

//   <br></br><br></br><br></br>
// <div className="viewback">
// <div className="views">

//   <section id="view">
//     <center>
//     <h2 className='h2ad'>View Home Care Services</h2>
//     </center>
//     <table className='admintable'>
//       <tr>
//         <th>Service ID</th>
//         <th>Service Name</th>
//         <th>Service Provider (Craegiver) Name</th>
//         <th>Service Price</th>
//         <th>Service Duration</th>
//         <th>Service Availability</th>
//         <th>No of Days of Service</th>
       
//       </tr>
      
//     </table>
//   </section>
//   </div></div>
//   <br></br><br></br><br></br>
//   <div className='deleteback'>
// <div className="deletes">
//   <section id="delete">
//     <center>
//     <h2 className='h2ad'>Delete Home Care Service</h2>
//     </center>
//     <form className='adminform'>
//       <label htmlFor="serviceName" className='labelad'>Service Name:</label>
//       <input type="text" id="serviceName" name="serviceName" required className='admininput'/>
//       <br></br><br></br>
//       <button type="submit" className='adminbutton'>Delete Service</button>
//     </form>
//   </section>
  
//   </div></div>
//     </div>
//   )
// }

// export default Admin

import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    provider: '',
    price: '',
    duration: '',
    availability: '',
    noofdays: '',
    updateServiceName: '', // New state for updating service
  });

  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []); // Fetch services when the component mounts

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.get('http://localhost:8080/services', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setServicesData(response.data);
    } catch (error) {
      console.error('Fetching services failed:', error);
    }
  };

  const addService = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.post('http://localhost:8080/services', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Response:', response);

      setFormData({
        name: '',
        provider: '',
        price: '',
        duration: '',
        availability: '',
        noofdays: '',
      });

      fetchServices();
    } catch (error) {
      console.error('Error adding service:', error);
      console.error('Error response:', error.response);
    }
  };

  const updateService = async (event) => {
    event.preventDefault();

    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.put(
        `http://localhost:8080/services/${formData.updateServiceName}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('Updated service:', response.data);

      setFormData({
        name: '',
        provider: '',
        price: '',
        duration: '',
        availability: '',
        noofdays: '',
        updateServiceName: '',
      });

      fetchServices();
    } catch (error) {
      console.error('Error updating service:', error);
      console.error('Error response:', error.response);
    }
  };

  const deleteService = async (serviceName) => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.delete(`http://localhost:8080/services/${serviceName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Deleted service:', response.data);

      fetchServices();
    } catch (error) {
      console.error('Error deleting service:', error);
      console.error('Error response:', error.response);
    }
  };


  return (
    <div>
        <div className='adminback'>
        <header className='adminheader'>
  <nav className='adminnav'>
    <a href="#add">Add Service</a>
    <a href="#edit">Edit Service</a>
    <a href="#view">View Services</a>
    <a href="#delete">Delete Service</a>
  </nav>
   
  </header>
  <div className='admins'>
    <p className='pad'>&apos;Administering care with heart and technology hand in hand.&apos;
    <br></br><br></br>
    <p className='pc'>Click above or scroll down to add, edit, or delete services...</p></p>
  </div>
  </div>
<br></br><br></br><br></br>
<div className='addback'>
<div className="adds">
  <section id="add" className='adminsection'>
    <center>
    <h2 className='h2ad'>Add Home Care Service</h2>
    </center>
    <form className='adminform' onSubmit={addService}>
          <label htmlFor="name" className='labelad'>Service Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className='admininput'/>

          <label htmlFor="provider" className='labelad'>Service Provider(Caregiver) Name:</label>
          <input type="text" id="provider" name="provider" value={formData.provider} onChange={(e) => setFormData({ ...formData, provider: e.target.value })} required className='admininput'/>

          <label htmlFor="price" className='labelad'>Service Price:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} required className='admininput'/>

          <label htmlFor="duration" className='labelad'>Service Duration (hours):</label>
          <input type="number" id="duration" name="duration" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} required className='admininput'/>

          <label htmlFor="availability" className='labelad'>Service Availability:</label>
          <input type="text" id="availability" name="availability" value={formData.availability} onChange={(e) => setFormData({ ...formData, availability: e.target.value })} required className='admininput'/>

          <label htmlFor="noofdays" className='labelad'>Number of Days of Service:</label>
          <input type="number" id="noofdays" name="noofdays" value={formData.noofdays} onChange={(e) => setFormData({ ...formData, noofdays: e.target.value })} required className='admininput'/>

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
<form className='adminform' onSubmit={updateService}>
            <label htmlFor="updateServiceName" className='labelad'>Service Name to Update:</label>
            <input
              type="text"
              id="updateServiceName"
              name="updateServiceName"
              value={formData.updateServiceName}
              onChange={(e) => setFormData({ ...formData, updateServiceName: e.target.value })}
              required
              className='admininput'
            />

            <label htmlFor="provider" className='labelad'>New Service Provider(Caregiver) Name:</label>
            <input
              type="text"
              id="provider"
              name="provider"
              value={formData.provider}
              onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
              required
              className='admininput'
            />

            <label htmlFor="price" className='labelad'>New Service Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
              className='admininput'
            />

            <label htmlFor="duration" className='labelad'>New Service Duration (hours):</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
              required
              className='admininput'
            />

            <label htmlFor="availability" className='labelad'>New Service Availability:</label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
              required
              className='admininput'
            />

            <label htmlFor="noofdays" className='labelad'>New Number of Days of Service:</label>
            <input
              type="number"
              id="noofdays"
              name="noofdays"
              value={formData.noofdays}
              onChange={(e) => setFormData({ ...formData, noofdays: e.target.value })}
              required
              className='admininput'
            />

            <br></br><br></br>
            <button type="submit" className='adminbutton'>Update Service</button>
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
              <thead>
                <tr>
                  <th>Service ID</th>
                  <th>Service Name</th>
                  <th>Service Provider (Caregiver) Name</th>
                  <th>Service Price</th>
                  <th>Service Duration</th>
                  <th>Service Availability</th>
                  <th>No of Days of Service</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service) => (
                  <tr key={service.id}>
                    <td>{service.id}</td>
                    <td>{service.name}</td>
                    <td>{service.provider}</td>
                    <td>{service.price}</td>
                    <td>{service.duration}</td>
                    <td>{service.availability}</td>
                    <td>{service.noofdays}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
  <br></br><br></br><br></br>
  <div className='deleteback'>
<div className="deletes">
  <section id="delete">
    <center>
    <h2 className='h2ad'>Delete Home Care Service</h2>
    </center>
    <form className='adminform'>
              <label htmlFor="deleteServiceName" className='labelad'>Service Name to Delete:</label>
              <input
                type="text"
                id="deleteServiceName"
                name="deleteServiceName"
                value={formData.deleteServiceName}
                onChange={(e) => setFormData({ ...formData, deleteServiceName: e.target.value })}
                required
                className='admininput'
              />
              <br></br><br></br>
              <button type="button" className='adminbutton' onClick={() => deleteService(formData.deleteServiceName)}>Delete Service</button>
            </form>
  </section>
  
  </div></div>
    </div>
  )
}

export default Admin;
