import { stat } from 'fs'
import React from 'react'
import './_NewProductIcon.scss'



const NewProductIcon:React.FC = () => {
  return (
    <div className='newProduct'>
      <img src="https://media.dominos.ua/icon/svg_file/2018/02/23/new.svg" alt="alt text" />
    </div>
  )
}

export default NewProductIcon