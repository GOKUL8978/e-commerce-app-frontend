import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { resetCart } from '../../redux/cartReducer';
import { loadStripe } from "@stripe/stripe-js";
import {makeRequest} from "../../makeRequest"
import "./Cart.scss"
const Cart = () => {
   const products = useSelector((state)=> state.cart.products)
   const dispatch = useDispatch()
   const total = () =>{
    let total = 0
    products.forEach((item)=>
      (total += item.quantity * item.price))
    return total.toFixed(2)
   }
  const stripePromise = loadStripe('pk_test_51NWJdOSJoifzSnXsKcUyFZjpzISCuOVNbLSuct95gKu58yapUS8GccR8eEjh06ac1I5vndM9GNFHXJHyiskt0VTo00u7t4y2F1');
   const handlePayment = async() =>{
     try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });

    } catch (err) {
      console.log(err);
    }
  };
  console.log(handlePayment())
  return (
    <div className='cart'>
        <h1>Products in Cart</h1>
         {products?.map(item=>(
        <div className="item"  key={item.id}>
            <img src={ item.img} alt="" />
            <div className="details">
             <h1>{item.title}</h1>
             <p>{item.desc.substring(0,700)}</p>
             <div className="price">{item.quantity} x {item.price}</div>
            </div>
            <DeleteIcon className='delete' onClick={()=> dispatch(removeItem(item.id))} />
        </div>
          ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>₹{total()}</span>
        </div>
        <button onClick={handlePayment}> PROCEED TO CHECKOUT</button>
        <span className='reset'  onClick={()=> dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart
