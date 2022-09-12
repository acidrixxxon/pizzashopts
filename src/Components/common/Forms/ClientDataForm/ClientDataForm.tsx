import React from 'react'
import { Context } from '../../../../Context'
import Error from '../../Error/Error'
import './_ClientDataForm.scss'


const ClientDataForm = () => {
  const { state: { customerData: { errors }},actions: { setFieldError,setCustomerData },state: { customerData } } = React.useContext(Context) 
  
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFieldError({...errors,[e.target.name]: null})
    setCustomerData(e)
  }

    return (
      <div id='clientForm'>
        <h4 className="clientForm__title">Контакти</h4>

        <div className="clientForm__inputGroup">
          <div className="clientForm__inputField form__field">
            <input type="text" placeholder='Імя' value={customerData.name} className={errors.name !== null ? 'clientForm__input not__valid form__input' : 'clientForm__input form__input'} onChange={(e) => inputChangeHandler(e)} name="name" />
            <Error className='clientForm__inputError' value={errors.name} />
          </div>

          <div className="clientForm__inputField form__field">
            <input type="text" placeholder='Телефон' value={customerData.phone} className={errors.phone !== null ? 'clientForm__input not__valid form__input' : 'clientForm__input form__input'} onChange={(e) => inputChangeHandler(e)} name="phone" />
            <Error className='clientForm__inputError' value={errors.phone}/>
          </div>

          <div className="clientForm__inputField form__field">
            <input type="text" placeholder='Email' value={customerData.email} className={errors.email !== null ? 'clientForm__input not__valid form__input' : 'clientForm__input form__input'} onChange={(e) => inputChangeHandler(e)} name="email" />
            <Error className='clientForm__inputError' value={errors.email} />
          </div>
        </div>
      </div>
    )
}

export default ClientDataForm