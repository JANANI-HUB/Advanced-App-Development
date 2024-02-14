import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phonenumber: '',
    date: '',
    servicetype: 'service0', // default value
  });

  const [setIsSubmitted] = useState(false);

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

      const response = await axios.post('http://localhost:8080/booking', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Booking submitted!', response.data);

      // Show success message using react-toastify
      toast.success('Booking submitted successfully!', {
        position: 'top-right',
        autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Clear form data after submission
      setFormData({
        username: '',
        email: '',
        phonenumber: '',
        date: '',
        servicetype: 'service0', // Reset to default value
      });

      // Set submission status to true
      setIsSubmitted(true);
    } catch (error) {
      console.error('Booking submission failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div className='bookingback'>
      <div className="booking-form">
        <h2 className='h2book'>Booking Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className='booklabel'>Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} required />

          <label htmlFor="email" className='booklabel'>Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />

          <label htmlFor="phonenumber" className='booklabel'>Phone Number:</label>
          <input type="tel" id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={(e) => setFormData({ ...formData, phonenumber: e.target.value })} required />

          <label htmlFor="date" className='booklabel'>Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />

          <label htmlFor="servicetype" className='booklabel'>Choose a Service:</label>
          <select id="servicetype" name="servicetype" value={formData.servicetype} onChange={(e) => setFormData({ ...formData, servicetype: e.target.value })} required>
            <option value="service0">Select one</option>
            <option value="Nursing">Nursing</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Medication">Medication</option>
            <option value="Physical Therapy">Physical Therapy</option>
            <option value="Companionship">Companionship</option>
          </select>

          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Booking;
