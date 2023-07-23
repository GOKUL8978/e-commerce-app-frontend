import React from 'react'
import "./Card.scss"
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom'
const Card = ({item}) => {
  const id = useParams().id;
  const {data} = useFetch(`/products/${id}?populate=*`)
  console.log(data)
  return (
    <Link className='link' to={`/product/${item.id}`}  key={1}>
    <div className='card'>
     <div className="image">
      {item?.attributes.isNew && <span>New Deals</span>}
     <img src={item.attributes?.img?.data?.attributes?.url} alt="" className='firstImg'/>
     <img src={item.attributes?.img2?.data?.attributes?.url} alt=""  className='secondImg'/>
     </div>
     <h2> {item?.attributes.title}</h2>
     <div className="rating">
      <StarIcon className='icon'/>
      <span>3.7</span>
      <div className="prices">
       <h3 className='old'>₹{item?.attributes.oldprice}</h3>
      <h3>₹{item?.attributes.newprice}</h3>
      </div>
     </div>
     <div className="btn">
       <button className='addbtn'>View Details</button>
     </div>
    </div>
    </Link>
  )
}

export default Card
