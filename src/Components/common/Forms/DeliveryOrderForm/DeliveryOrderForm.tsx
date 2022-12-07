import './_DeliveryOrderForm.scss';

import { Context1 } from '../../../../Context/Context';
import Error from '../../Error/Error';
import PaymentType from '../../PaymentType/PaymentType';
import React from 'react';
import { getCustomerDataActions } from '../../../../Context/actions';

const DeliveryOrderForm = () => {
  const {
    state: { customerData },
    dispatch,
  } = React.useContext(Context1);
  const { setCustomerData } = getCustomerDataActions(dispatch);

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setCustomerData(e);
  };

  return (
    <div id='deliveryform'>
      <h4 className='deliveryform__title'>Адреса</h4>

      <div className='deliveryform__inputField form__field'>
        <input
          type='text'
          value={customerData.street}
          className={
            customerData.errors.street !== null ? 'deliveryform__input form__input not__valid' : 'deliveryform__input form__input'
          }
          placeholder='Вулиця'
          name='street'
          onChange={(e) => inputChangeHandler(e)}
        />
        <Error className='deliveryform__inputError' value={customerData.errors.street} />
      </div>

      <div className='deliveryform__inputGroup'>
        <div className='deliveryform__inputField form__field'>
          <input
            type='text'
            value={customerData.house}
            className={
              customerData.errors.house !== null ? 'deliveryform__input form__input not__valid' : 'deliveryform__input form__input'
            }
            placeholder='Будинок'
            name='house'
            onChange={(e) => inputChangeHandler(e)}
          />
          <Error className='deliveryform__inputError' value={customerData.errors.house} />
        </div>

        <div className='deliveryform__inputField form__field'>
          <input
            type='text'
            value={customerData.room}
            className='deliveryform__input form__input'
            placeholder='Квартира'
            name='room'
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>

        <div className='deliveryform__inputField form__field'>
          <input
            type='text'
            value={customerData.floor}
            className='deliveryform__input form__input'
            placeholder='Поверх'
            name='floor'
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
      </div>

      <div className='deliveryform__comment'>
        <textarea
          className='deliveryform__textarea'
          placeholder='Коментар для курьера'
          name='comment'
          onChange={(e) => inputChangeHandler(e)}></textarea>
      </div>

      <PaymentType />
    </div>
  );
};

export default DeliveryOrderForm;
