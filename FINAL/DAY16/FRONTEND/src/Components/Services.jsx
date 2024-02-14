import { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';
import './Service.css';

const Services = () => {
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

  return (
    <div>
      
      <div className="serviceback">
        <div className="views">
          <section id="view">
            <center>
              <h2 className='h2ad'> Home Care Services Details</h2>
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
            <p>Please view the details and availability and then get to know about the each service description in homepage...and then book services</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services;
