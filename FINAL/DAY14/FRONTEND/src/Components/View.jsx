import  { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import './View.css';

const View = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      const response = await axios.get('http://localhost:8080/booking', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log('Fetched data:', response.data);

      // Update the state with the fetched data
      setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div>
      <div className='viewuback'>
        <div className="views">
          <section id="view">
            <center>
              <h2 className='h2ad'>Booking Details</h2>
            </center>
            <table className='admintable'>
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone number</th>
                  <th>Date</th>
                  <th>Services chosen</th>
                </tr>
              </thead>
              <tbody>
                {servicesData.map((service, index) => (
                  <tr key={index}>
                    <td>{service.username}</td>
                    <td>{service.email}</td>
                    <td>{service.phonenumber}</td>
                    <td>{service.date}</td>
                    <td>{service.servicetype}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default View;
