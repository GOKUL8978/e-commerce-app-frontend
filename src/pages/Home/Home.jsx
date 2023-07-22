import React from 'react'
import Slider from '../../components/Slider/Slider'
import BestDeals from '../../components/BestDeals/BestDeals'
import Contact from '../../components/Contact/Contact'
const Home = ({item}) => {
  return (
    <div className='app'>
      <Slider />
      <BestDeals type="Daily Deals"/>
      <BestDeals type="New Launches"/>
      <Contact />
    </div>
  )
}

export default Home