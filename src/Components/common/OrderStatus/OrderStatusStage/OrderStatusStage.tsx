import React from 'react'
import { STATUS_IMAGE_URL } from '../../../../mockdata'
import './_OrderStatusStage.scss'

interface IComponentProps {
    status: number | undefined
}

const OrderStatusStage:React.FC<IComponentProps> = ({ status }) => {
  return (
    <div className="order__status">
        <img src={`${STATUS_IMAGE_URL}${status}.gif`} alt="order-staus" />
    </div>
  )
}

export default OrderStatusStage