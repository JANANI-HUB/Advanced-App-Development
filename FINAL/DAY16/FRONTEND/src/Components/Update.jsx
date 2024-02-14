import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Update.css';

const Update = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phonenumber: '',
    date: '',
    servicetype: 'service0', // default value
    updateUsername: '', // new state to store the username for update
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      // Make sure token is available
      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      const response = await axios.put(`http://localhost:8080/booking/${formData.updateUsername}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Updated data:', response.data);

      // Display a toast message for successful update
      toast.success('Booking details updated successfully!', {
        position: 'top-right',
        autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Clear form data after update
      setFormData({
        username: '',
        email: '',
        phonenumber: '',
        date: '',
        servicetype: 'service0', // Reset to default value
        updateUsername: '', // Reset updateUsername
      });
    } catch (error) {
      console.error('Updating data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='upback'>
      <div className="booking-form">
        <h2 className='h2book'>Update Booking</h2>
        <form onSubmit={handleSubmit}>
          {/* Additional input for the username to update */}
          <label htmlFor="updateUsername" className='booklabel'>Username to Update:</label>
          <input type="text" id="updateUsername" name="updateUsername" value={formData.updateUsername} onChange={handleChange} required />

          <label htmlFor="username" className='booklabel'>New Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

          <label htmlFor="email" className='booklabel'>New Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label htmlFor="phonenumber" className='booklabel'>New Phone Number:</label>
          <input type="tel" id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange} required />

          <label htmlFor="date" className='booklabel'>New Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />

          <label htmlFor="servicetype" className='booklabel'>Choose a New Service:</label>
          <select id="servicetype" name="servicetype" value={formData.servicetype} onChange={handleChange} required>
            <option value="service0">Select one</option>
            <option value="Nursing">Nursing</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Medication">Medication</option>
            <option value="Physical Therapy">Physical Therapy</option>
            <option value="Companionship">Companionship</option>
          </select>

          <button type="submit">Update Booking</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Update;
