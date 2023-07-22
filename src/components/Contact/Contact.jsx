import React from 'react'
import "./Contact.scss"
const Contact = () => {
  return (
    <div className='contact'>
        <div className="item">
          <h2>Boat</h2>
          <span>Subscribe to our email alerts!!</span>
          <input type="email" placeholder='Enter your email address' />
        </div>
        <div className="item">
         <h2>Shop</h2>
         <span>True Wireless Earbuds </span>
         <span>Wireless Headphones</span>
         <span>Wireless Speakers</span>
         <span>Home Audio</span>
        </div>
        <div className="item">
         <h2>Help</h2>
         <span>Track Your Order</span>
         <span>Warranty & Support</span>
         <span>Return Policy</span>
         <span>Service Centers</span>
        </div>
        <div className="item">
        <h2>Company</h2>
        <span>About boAt</span>
        <span>News</span>
        <span>Read Our Blog</span>
        <span>Careers</span>
        </div>
    </div>
  )
}

export default Contact