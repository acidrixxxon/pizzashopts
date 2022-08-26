import React from 'react'
import { Context } from '../../../../Context'
import './_ClientDataForm.scss'


const ClientDataForm = () => {
  const { dispatch } = React.useContext(Context) 

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({type: 'SET_CUSTOMER_DATA',payload: e})
  }

    return (
      <div id='clientForm'>
        <h4 className="clientForm__title">Контакти</h4>

        <div className="clientForm__inputGroup">
          <input type="text" placeholder='Імя' className='clientForm__input' onChange={(e) => inputChangeHandler(e)} name="name" />
          <input type="text" placeholder='Телефон' className='clientForm__input' onChange={(e) => inputChangeHandler(e)} name="phone" />
          <input type="text" placeholder='Email' className='clientForm__input' onChange={(e) => inputChangeHandler(e)} name="email" />
        </div>
      </div>
    )
}

export default ClientDataForm