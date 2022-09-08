import React from 'react'
import './_OrderStatusStage.scss'

interface IComponentProps {
    status: number
}

const OrderStatusStage:React.FC<IComponentProps> = ({ status }) => {
  return (
    <div className="order__status">
        <img src={`https://dominospizza.ru/images/gif/ru/delivery/${status}.gif`} alt="order-staus" />
    </div>
  )
}

export default OrderStatusStage