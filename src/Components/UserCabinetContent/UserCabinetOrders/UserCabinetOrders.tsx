import React from 'react'
import { Context1 } from '../../../Context/Context'
import OrderService from '../../../Services/OrderService'
import { IOrderFromServer } from '../../../types/OrderTypes'
import Spinner from '../../common/Icons/Spinner/Spinner'
import './_UserCabinetOrders.scss'
import UserCabinetOrderItem from './UserCabinetOrderItem/UserCabinetOrderItem'

const UserCabinetOrders:React.FC = () => {
  const [ loading,setLoading ] = React.useState<boolean>(true)
  const [ userOrders,setOrders ] = React.useState<IOrderFromServer[] | null>(null)
  const [ limit,setLimit ] = React.useState(3)

  const { state: { user }} = React.useContext(Context1)
  console.log(userOrders)

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await OrderService.getUserOrders(user?.tokens?.accessToken)
      if (data.success === true) {
        setOrders(data.orders)
        setLoading(false)
      }
      
    }

    fetchData()
  },[])
  
  return (
    <div id="UserCabinet__Orders">
      {loading && <Spinner className='userCabinet__spinner'/>}

      {userOrders !== null && userOrders.length > 0 ?    
        <>
          <div className='userCabinet__table'>
              <div className="userCabinet__thead">
                <div className="date th">Дата</div>
                <div className="address th">Адреса</div>
                <div className="phone th">Номер телефону</div>
                <div className="price th">Ціна</div>
                <div className="status th">Статус</div>
                <div className="actions th"></div>
              </div>

              <div className="userCabinet__tbody">
                {userOrders.map((item: IOrderFromServer) => <UserCabinetOrderItem key={item._id} item={item} />)}
              </div>
            </div>
          </>
           : 
          <span>Ви ще не робили замовлень</span>}
    </div>
  )
}

export default UserCabinetOrders