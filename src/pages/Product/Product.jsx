import React from 'react'
import { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import "./Product.scss"
const Product = () => {

   const dispatch = useDispatch()
  const id = useParams().id;
   const[quantity,setQuantity]=useState(1)
   const {data,loading} = useFetch(`/products/${id}?populate=*`)
   const [selectedImg, setSelectedImg] = useState("img");
  return (
    <div className='product'>
      {loading ? ("loading") : (<><div className="left">
       <div className="images">
        <img src={
                  data?.attributes?.img?.data?.attributes?.url} 
                  alt=""  
                  onClick={(e) => setSelectedImg("img")}/>
        <img src={ 
                  data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={(e) => setSelectedImg("img2")}/>
       </div>
       <div className="mainimg">
       <img src={ 
                  data?.attributes?.[selectedImg]?.data?.attributes?.url}  alt="" />
       </div>
      </div>
      <div className="right">
       <h1>{data?.attributes?.title}</h1>
       <span className='price'>₹{data?.attributes?.newprice}</span>
       <p>{data?.attributes?.desc}</p>
       <div className="quantity">
           <button onClick={()=>setQuantity(prevState=>prevState === 1 ? 1 : prevState-1)}>-</button>
              {quantity}
          <button onClick={()=>setQuantity(prevState=>prevState+1)}>+</button>
       </div>
       <button className='add'  onClick={()=>dispatch(addToCart({
          id: data.id,
          title: data.attributes.title,
          desc:data.attributes.desc,
          price: data.attributes.newprice,
          img: data.attributes.img.data.attributes.url,
          quantity,
         }))}><AddShoppingCartIcon/>ADD TO CART</button>
       <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
         </div>
        </div>
         <div className="info">
          <span>Display : 5 inch OLED multi touch special</span>
          <span>Product Type: IOS smart watch</span>
          <span>Tag: Bangaore Electronics</span>
          <hr />
        </div>
        <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div></>)}
    </div>
  )
}

export default Product
