import React from 'react'
import './_ClientDataForm.scss'


const ClientDataForm = () => {
    return (
      <div id='clientForm'>
        <h4 className="clientForm__title">Контакти</h4>

        <div className="clientForm__inputGroup">
          <input type="text" placeholder='Імя' className='clientForm__input'/>
          <input type="text" placeholder='Телефон' className='clientForm__input'/>
          <input type="text" placeholder='Email' className='clientForm__input'/>
        </div>
      </div>
    )
}

export default ClientDataForm