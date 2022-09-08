import React from 'react'
import Container from '../../Components/common/Container/Container'
import OrderStatusInfo from '../../Components/common/OrderStatus/OrderStatusInfo/OrderStatusInfo'
import OrderStatusStage from '../../Components/common/OrderStatus/OrderStatusStage/OrderStatusStage'
import './_OrderStatus.scss'

const OrderStatus:React.FC = () => {
  const [ status,setStatus ] = React.useState<number>(1)

  React.useEffect(() => {
    setTimeout(() => {
      if(status < 6) setStatus(state => state + 1)
    },5000)
  },[status])

  return (
    <div id="order">
        <Container>
            <h4 className="order__title">
              Статус замовлення
            </h4>

            <div className="order__content">
              <div className="order__heading">
                Замовлення  № 2022-09-05#65, 5 вересня 2022 г., 22:50
              </div>

              <div className="order__main">
                <OrderStatusStage status={status}/>
                <OrderStatusInfo />
              </div>
            </div>

            <div className="order__footer">
                <div className="order__title">
                  Информация о заказе
                </div>

                <div className="order__itemsList">
                  <div className="order__item">
                    <img src="https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi-thumbnail-960x960-70.jpg" alt="" />

                    <div className="order__data">
                      <div className="order__itemHeader">
                        <div>
                          <h4 className="order__itemTitle">Пепероні з томатами на тонкому(середня)</h4>
                          <p className='order__itemSize'>Середня 22см,тонке(1х)</p>
                        </div>

                        <span className="order__itemPrice">344 грн.</span>
                      </div>

                      <div className="order__itemFooter">
                        <p>Сир Моцарела, Соус Барбекю, Пепероні</p>
                      </div>
                    </div>
                  </div>

                  <div className="order__item">
                    <img src="https://media.dominos.ua/__sized__/menu/product_osg_image_mobile/2018/02/28/%D0%9F%D0%B5%D0%BF%D0%BF%D0%B5%D1%80%D0%BE%D0%BD%D0%B8_%D0%B8_%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D1%8B_300dpi-thumbnail-960x960-70.jpg" alt="" />

                    <div className="order__data">
                      <div className="order__itemHeader">
                        <div>
                          <h4 className="order__itemTitle">Пепероні з томатами на тонкому(середня)</h4>
                          <p className='order__itemSize'>Середня 22см,тонке(1х)</p>
                        </div>

                        <span className="order__itemPrice">344 грн.</span>
                      </div>

                      <div className="order__itemFooter">
                        <p>Сир Моцарела, Соус Барбекю, Пепероні</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order__totals">
                  <p>Итого: <span>1445</span> грн.</p>
                </div>
              </div>
        </Container>
    </div>
  )
}

export default OrderStatus

// /images/gif/ru/delivery/2.gif