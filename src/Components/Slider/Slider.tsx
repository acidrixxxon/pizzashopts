import React from 'react'

import SliderItem from './SliderItem/SliderItem'
import './_Slider.scss'

interface IComponentsProps {
 
}

const Slider:React.FC<IComponentsProps> = () => {
  const [ activeIndex,setActiveIdx ] = React.useState(0)
  const [ offsetX,setOffsetX ] = React.useState<number>(0)
  const [ items,setItems ] = React.useState<string[]>(['https://media.dominos.ua/slider/slide_image/2022/04/29/vid-250-uah_slider_ukr.jpg','https://media.dominos.ua/slider/slide_image/2022/09/01/slider_ukr.jpg','https://media.dominos.ua/slider/slide_image/2022/04/29/vid-250-uah_slider_ukr.jpg','https://media.dominos.ua/slider/slide_image/2022/09/01/slider_ukr.jpg'])
  const index = 0
  const lastSlideIndex = items.length - 1
  const slidesQty = items.length
  
  const listRef = React.useRef<HTMLUListElement>(null)
  
  const containerWidth = listRef.current ? listRef.current.offsetWidth : 0

  const onIndicatorClick = (idx: number) => {
    setActiveIdx(idx)
    setOffsetX(containerWidth * idx)
  }

  const resetIndex = () => setActiveIdx(0)
  const changeIndex = () => setActiveIdx(state => state + 1)

  React.useEffect(() => {
    const delay = 4000

    setTimeout(() => {
      if ( activeIndex + 1 >= slidesQty) {
        resetIndex()
        setOffsetX(containerWidth * activeIndex)
      } else {
        changeIndex()
        setOffsetX(containerWidth * activeIndex)
      }
    },delay)
  },[activeIndex])

  return (
    <div className='slider__container'>
     <ul className="slider__list" ref={listRef} style={{transform: `translate3d(-${offsetX}px,0,0)`}}>
      {items.map((_item,idx) => <SliderItem item={_item} key={idx} />)}
     </ul>

     <ul className="slider__indicators">
      {items.map((item,idx) => (
        <li onClick={() => onIndicatorClick(idx)} className={activeIndex === idx ? 'slider__dot active' : 'slider__dot'}></li>
      ))}
     </ul>
    </div>
  )
}

export default Slider