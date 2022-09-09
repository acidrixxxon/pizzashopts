import React from 'react'
import { Context } from '../../../../Context'
import './_ClientDataForm.scss'


const ClientDataForm = () => {
  const { dispatch,state: { customerData: { errors }} } = React.useContext(Context) 

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: 'SET_CUSTOMER_DATA',payload: e})
  }

    return (
      <div id='clientForm'>
        <h4 className="clientForm__title">Контакти</h4>

        <div className="clientForm__inputGroup">
          <div className="clientForm__inputField form__field">
            <input type="text" placeholder='Імя' className={errors.name !== null ? 'clientForm__input not__valid form__input' : 'clientForm__input form__input'} onChange={(e) => inputChangeHandler(e)} name="name" />
            {errors.name !== null && <span className='clientForm__inputError input__error'>{errors.name[0]}</span>}
          </div>

          <div className="clientForm__inputField form__field">
            <input type="text" placeholder='Телефон' className={errors.phone !== null ? 'clientForm__input not__valid form__input' : 'clientForm__input form__input'} onChange={(e) => inputChangeHandler(e)} name="phone" />
            {errors.phone !== null && <span className='clientForm__inputError input__error'>{errors.phone[0]}</span>}
          </div>

          <div className="clientForm__inputField form__field">
            <input type="text" placeholder='Email' className={errors.email !== null ? 'clientForm__input not__valid form__input' : 'clientForm__input form__input'} onChange={(e) => inputChangeHandler(e)} name="email" />
            {errors.email !== null && <span className='clientForm__inputError input__error'>{errors.email[0]}</span>}
          </div>
        </div>
      </div>
    )
}

export default ClientDataForm