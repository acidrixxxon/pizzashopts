import React from 'react'
import { Context1 } from '../../../../Context/Context'
import Error from '../../Error/Error'
import './_ClientDataForm.scss'


const ClientDataForm = () => { 
  const { state: { customerData },actions: { setCustomerData,setFieldError }} = React.useContext(Context1)
  
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldError({...customerData.errors,[e.target.name]: null})
    setCustomerData(e)
  }

    return (
      <div id='clientForm'>
        <h4 className="clientForm__title">Контакти</h4>

        <div className="clientForm__inputGroup">
          <div className="clientForm__inputField form__field">
            <input type="text" placeholder='Імя' value={customerData.name} className={customerData.errors.name !== null ? 'clientForm__input not__valid form__input' : 'clientForm__input form__input'} onChange={(e) => inputChangeHandler(e)} name="name" />
            <Error className='clientForm__inputError' value={customerData.errors.name} />
          </div>

          <div className="clientForm__inputField form__field">
            <input type="text" placeholder='Телефон' value={customerData.phone} className={customerData.errors.phone !== null ? 'clientForm__input not__valid form__input' : 'clientForm__input form__input'} onChange={(e) => inputChangeHandler(e)} name="phone" />
            <Error className='clientForm__inputError' value={customerData.errors.phone}/>
          </div>

          <div className="clientForm__inputField form__field">
            <input type="text" placeholder='Email' value={customerData.email} className={customerData.errors.email !== null ? 'clientForm__input not__valid form__input' : 'clientForm__input form__input'} onChange={(e) => inputChangeHandler(e)} name="email" />
            <Error className='clientForm__inputError' value={customerData.errors.email} />
          </div>
        </div>
      </div>
    )
}

export default ClientDataForm