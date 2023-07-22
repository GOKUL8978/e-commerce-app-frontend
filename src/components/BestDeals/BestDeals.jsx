import Card from '../Card/Card'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./BestDeals.scss"
const BestDeals = ({type}) => {
    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)
    console.log(data)

  return (
    <div className='bestdeals'>
      <div className="top">
       <h1>{type}</h1>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos facilis cum esse quae quis ducimus, laboriosam adipisci officia? Quidem pariatur quo dolorem numquam ipsum sint fugiat obcaecati doloribus fugit excepturi ducimus, odio explicabo velit sit!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos facilis cum esse quae quis ducimus, laboriosam adipisci officia? Quide
           </p>
      </div>
      <div className="bottom">
         { error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data.map(item=>(
         <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default BestDeals