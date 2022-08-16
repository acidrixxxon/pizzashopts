import React from 'react'
import { Context } from '../../../../Context'
import ProductService from '../../../../Services/ProductService'
import { SearchResultInterface } from '../../../../types'
import PizzaComponent from '../../ProductComponent/PizzaComponent'

type PropsType = {
  items: SearchResultInterface[]
}

const PizzaList:React.FC<PropsType> = (items) => {
  const { state: { sort,category }} = React.useContext(Context)


  return (
    <div>
      
    </div>
  )
}

export default PizzaList