import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Booking.css';

const Delete = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phonenumber: '',
    date: '',
    servicetype: 'service0', // default value
    updateUsername: '', // new state to store the username for update
  });

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        return;
      }

      const response = await axios.delete(`http://localhost:8080/booking/${formData.username}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Deleted data:', response.data);
      // Handle the deletion as needed

      // Clear form data after deletion
      setFormData({
        username: '',
        email: '',
        phonenumber: '',
        date: '',
        servicetype: 'service0', // Reset to default value
        updateUsername: '', // Reset updateUsername
      });

      // Display toast message
      toast.success('Booking deleted successfully');
    } catch (error) {
      console.error('Deleting data failed:', error);
      // Handle the error, e.g., show an error message
      toast.error('Failed to delete booking');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className='bookingback'>
      <div className="booking-form">
        <form>
          <label htmlFor="username" className='booklabel'>Enter username to Delete:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
<br></br><br></br>
          <button type="button" onClick={handleDelete}>Delete My Booking</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Delete;
