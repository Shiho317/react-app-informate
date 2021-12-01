import React from 'react'

export default function Sliderbtn({prevSlideX, nextSlideX, prevSlideY, nextSlideY, prevSlideZ, nextSlideZ}) {
  return (
    <div>
      <button className="slider__btn slider__btn--left" onClick={() => {prevSlideX(); prevSlideY(); prevSlideZ();}}>&larr;</button>
      <button className="slider__btn slider__btn--right" onClick={() => {nextSlideX(); nextSlideY(); nextSlideZ();}}>&rarr;</button>
      <div className="dots"></div>
    </div>
  )
}
