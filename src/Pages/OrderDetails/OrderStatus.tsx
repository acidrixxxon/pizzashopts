import React from 'react'
import Container from '../../Components/common/Container/Container'
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
                <div className="order__status">
                  <img src={`https://dominospizza.ru/images/gif/ru/delivery/${status}.gif`} alt="" />
                </div>

                <div className="order__info">
                  <div className="order__infoGroup">
                    <h4 className="order__infoGroupTitle">Контакти</h4>

                    <div className="order__infoGroupRow">
                      <span>Имя:</span>
                      <span>Антон</span>
                    </div>

                    <div className="order__infoGroupRow">
                      <span>Email:</span>
                      <span>maslov@rambler.ru </span>
                    </div>

                    <div className="order__infoGroupRow">
                      <span>Телефон:</span>
                      <span>+7(800)343-04-34</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Container>
    </div>
  )
}

export default OrderStatus

// /images/gif/ru/delivery/2.gif