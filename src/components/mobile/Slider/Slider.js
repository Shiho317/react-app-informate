import React, { useState } from 'react';
import Sliderbtn from './Slider-btn';
import slideImg1 from '../../../images/topicicon-1.jpg';
import slideImg2 from '../../../images/topicicon-2.jpg';
import slideImg3 from '../../../images/topicicon-3.jpg';
import slideImg4 from '../../../images/topicicon-4.jpg';
import slideImg5 from '../../../images/topicicon-5.jpg';
import slideImg6 from '../../../images/topicicon-6.jpg';
import slideImg7 from '../../../images/topicicon-7.jpg';
import slideImg8 from '../../../images/topicicon-8.jpg';
import slideImg9 from '../../../images/topicicon-9.jpg';

function Slider() {

  const [x, setX] = useState(0)
  
  const nextSlideX = () => {
    if(x === -200){
      setX(0)
    } else {
      setX(x - 100)
    }
  }

  const prevSlideX = () => {
    if(x === 0){
      setX(-200)
    } else {
      setX(x + 100)
    }
  }

  const [y, setY] = useState(100)
  
  const nextSlideY = () => {
    if(y === -100){
      setY(100)
    } else {
      setY(y - 100)
    }
  }

  const prevSlideY = () => {
    if(y === 100){
      setY(-100)
    } else {
      setY(y + 100)
    }
  }
  const [z, setZ] = useState(200)
  
  const nextSlideZ = () => {
    if(z === 0){
      setZ(200)
    } else {
      setZ(z - 100)
    }
  }

  const prevSlideZ = () => {
    if(z === 200){
      setZ(0)
    } else {
      setZ(z + 100)
    }
  }

  return (
    <div>
    <div className="slide"  style={{transform: `translateX(${x}%)`}}>
    <img className="slide__img1" src={slideImg1} alt="exchange"/>
    <img className="slide__img2" src={slideImg2} alt="money"/>
    <img className="slide__img3" src={slideImg3} alt="spot"/>
    </div>
    <div className="slide" style={{transform: `translateX(${y}%)`}}>
    <img className="slide__img4" src={slideImg4} alt="education"/>
    <img className="slide__img5" src={slideImg5} alt="health"/>
    <img className="slide__img6" src={slideImg6} alt="house"/>
    </div>
    <div className="slide" style={{transform: `translateX(${z}%)`}}>
    <img className="slide__img7" src={slideImg7} alt="living"/>
    <img className="slide__img8" src={slideImg8} alt="trip"/>
    <img className="slide__img9" src={slideImg9} alt="others"/>
    </div>

      <Sliderbtn 
      nextSlideX={nextSlideX} 
      prevSlideX={prevSlideX} 
      nextSlideY={nextSlideY} 
      prevSlideY={prevSlideY}
      nextSlideZ={nextSlideZ} 
      prevSlideZ={prevSlideZ}
      />
    </div>
  )
}

export default Slider;