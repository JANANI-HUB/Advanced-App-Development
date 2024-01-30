//import React from 'react'
import './Booking.css';
const Booking = () => {
  return (
    <div className='bookingback'>
    <div className="booking-form">
    <h2 className='h2book'>Booking Form</h2>
    <form action="#" method="post">
      <label htmlFor="name" className='booklabel'>Name:</label>
      <input type="text" id="name" name="name" required/>

      <label htmlFor="email" className='booklabel'>Email:</label>
      <input type="email" id="email" name="email" required/>

      <label htmlFor="phone" className='booklabel'>Phone Number:</label>
      <input type="tel" id="phone" name="phone" required/>

      <label htmlFor="date" className='booklabel'>Date:</label>
      <input type="date" id="date" name="date" required/>

      <label htmlFor="service" className='booklabel'>Choose a Service:</label>
      <select id="service" name="service" required>
        <option value="service0">Select one</option>
        <option value="service1">Nursing</option>
        <option value="service2">Personal Care</option>
        <option value="service3">Medication</option>
        <option value="service4">Physical Therapy</option>
        <option value="service5">Companionship</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  </div>
</div>
  )
}

export default Booking