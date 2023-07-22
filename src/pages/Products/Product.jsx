import List from '../../components/List/List'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import "./Product.scss"
import useFetch from '../../hooks/useFetch'
const Product = () => {
  const catId = parseInt(useParams().id)
  const[maxPrice,setMaxPrice]=useState(100000)
  const[sort,setSort]=useState("asc")
   const {data} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`)
  const [subselected,setSubselected] = useState([])
  const handleChange = (e)=>{
    const value = e.target.value
    const checked = e.target.checked;
    setSubselected(checked ? [...subselected,value]:subselected.filter((item) => item !== value))
  }
  console.log(subselected)
  return (
    <div className='products'>
      <div className="left">
       <div className="filter">
       <h2>Product Categories</h2>
        {data?.map((item)=>(<div className="check">
       <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
       <label htmlFor="1">{item.attributes.title}</label>
       </div>))}
       </div>
        <div className="filter">
        <h2>Filters</h2>
             <div className="input">
              <span>0</span>
              <input type="range" min={0} max={100000} defaultValue={100000}
              onChange={(e)=>setMaxPrice(e.target.value)} />
              <span>{maxPrice}</span>
              </div>
       </div>
        <div className="filter">
         <h2>Sort by price</h2>
          <div className="input">
             <input type="radio" id='asc' value="asc" name='price' onChange={(e)=>setSort("asc")}/>
             <label htmlFor="asc">Price (Lowest first)</label>
             </div>
             <div className="input">
             <input type="radio" id='desc' value="desc" name='price' defaultChecked="asc" onChange={(e)=>setSort("desc")}/>
             <label htmlFor="desc">Price (Highest first)</label>
             </div>
       </div>
      </div>
      <div className="right">
         <List catId={catId} maxPrice={maxPrice} sort={sort} subcats={subselected} />
      </div>
     
    </div>
  )
}

export default Product