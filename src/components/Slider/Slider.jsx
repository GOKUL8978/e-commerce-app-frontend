import React,{useState} from 'react'
import "./Slider.scss"
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
const Slider = () => {
   const[slide,setSlide]= useState(0)
   const prevSlide =() =>{
    setSlide(slide === 0 ? 2 :(prev) =>prev-1 )
   }
   const nextSlide=() =>{
    setSlide(slide === 2 ? 0 : (prev) =>prev+1)
   }
   const data =[
    "https://images.pexels.com/photos/1057712/pexels-photo-1057712.jpeg?auto=compress&cs=tinysrgb&w=1600" ,
    "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   ]
  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${slide*100}vw)`}}>
    <img src={data[0]}alt="" />
     <img src={data[1]} alt="" />
     <img src={data[2]} alt="" />
     </div>
     <div className="icons">
      <div className="icon icon1" onClick={prevSlide}>
      <ChevronLeftOutlinedIcon />
      </div>
      <div className="icon icon1">
      <KeyboardArrowRightOutlinedIcon onClick={nextSlide} />
      </div>
     </div>
    </div>
  )
}

export default Slider