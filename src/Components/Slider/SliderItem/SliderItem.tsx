import React from 'react'
import './_SliderItem.scss'

const SliderItem:React.FC<{item: string}> = ({ item }) => {
  return (
    <li className='slider__item'>
      <img className='slider__item-image' src={item} alt="slider__Image" />
    </li>
  )
}

export default SliderItem