import React from 'react'
import useFetch from '../../hooks/useFetch'
import Card from '../Card/Card'
import "./List.scss"
  const List = ({ subcats, maxPrice, sort, catId }) => {
     const {data,loading} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subcats.map(item=>`&[filters][sub_categories][id][$eq]=${item}`)}&[filters][newprice][$lte]=${maxPrice}&sort=newprice:${sort}`);
  return (
    <div className='list'>
        {loading ? " loading" : data?.map(item=>(
        <Card item={item} key={item.id}/>))}
    </div>
  )
}

export default List