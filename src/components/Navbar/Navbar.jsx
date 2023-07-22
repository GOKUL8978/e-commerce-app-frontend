import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state)=> state.cart.products)
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="logo">
           <img src="https://play-lh.googleusercontent.com/5T9UcnMRQ7NIIqeo58ZCvG5-qEXkOoHVq6p4F3poPU-vk-9vPKLpXNMjwnfh93e66Mut" alt="" width="75px"/>
           <h1><Link  className='link' to="/">Boat</Link> </h1>
           </div>

            <div className="item">
              <Link  className='link'  to="/"> Home</Link>
           </div>
            <div className="item">
                <Link  className='link'  to="/products/1">Mobiles</Link> 
           </div>
            <div className="item">
               <Link  className='link'  to="/products/2">Earphones</Link> 
           </div>
            <div className="item">
               <Link  className='link'  to="/products/3">Laptops</Link> 
           </div>
        </div>
        
        <div className="center">
          <div className="search">
          <button><SearchOutlinedIcon/></button>
          </div>
           <div className="search">
          <input type="text" placeholder='Search..'/>
          </div>
        </div>
        
        <div className="right">
          
             <div className="icons">
               <Person2OutlinedIcon/>
               <FavoriteBorderOutlinedIcon/>
               <div className="cartIcon" onClick={()=>setOpen(!open)}>
               <ShoppingCartOutlinedIcon/>
               <span>{products.length}</span>
               </div>
             </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar
