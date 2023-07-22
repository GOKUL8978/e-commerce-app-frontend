import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <span>Smartphones</span>
        <span>Laptops</span>
        <span>Watches</span>
        <span>Accesories</span>
      </div>
      <div className="item">
        <h1>Links</h1>
        <span>Home</span>
        <span>Contact</span>
        <span>Blogs</span>
        <span>About Us</span>
      </div>
      <div className="item">
        <h1>About Us</h1>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, reprehenderit iusto? Earum quam voluptatibus, fugit deleniti at non, reprehenderit nam vero praesentium temporibus fugiat modi ipsa unde corrupti blanditiis quod!</span>
      </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img src="https://play-lh.googleusercontent.com/5T9UcnMRQ7NIIqeo58ZCvG5-qEXkOoHVq6p4F3poPU-vk-9vPKLpXNMjwnfh93e66Mut" alt="" width="75px"/>
          <h2>Boat</h2>
          <span>&copy;Copyrights reserved, 2023</span>
        </div>
        <div className="right">
          <img src="https://freepngimg.com/save/25802-credit-card-visa-and-master-card-transparent/1440x335" alt="" width="400px"/>
        </div>
      </div>
    </div>
  )
}

export default Footer