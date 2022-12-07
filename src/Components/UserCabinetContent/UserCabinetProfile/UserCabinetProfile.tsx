import './_UserCabinetProfile.scss';

import { Context1 } from '../../../Context/Context';
import React from 'react';
import { Rings } from 'react-loader-spinner';
import { isEqual } from 'lodash';
import { getUserActions } from '../../../Context/actions/userActions';

const UserCabinetProfile: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const {
    state: { user },
    dispatch,
  } = React.useContext(Context1);

  const { updateUserProfile } = getUserActions(dispatch);

  const [formData, setFormData] = React.useState({
    email: user?.email || '',
    firstName: user?.firstName || '',
    secondName: user?.secondName || '',
    phone: user?.phone || '',
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      user?.email !== formData.email ||
      user?.firstName !== formData.firstName ||
      user?.secondName !== formData.secondName ||
      user?.phone !== formData.phone
    ) {
      setLoading(true);
      const { success, message } = await updateUserProfile(formData, user?.tokens?.accessToken);
      if (success && message) {
        setTimeout(() => setLoading(false), 2000);
      }
    }
  };

  const userFromContext = { email: user?.email, firstName: user?.firstName, phone: user?.phone, secondName: user?.secondName };

  return (
    <div id='UserCabinet__Profile'>
      <h4 className='userCabinet__title'>Загальна інформація</h4>

      <form className='userCabinet__form' onSubmit={submitForm}>
        <div className='userCabinet__group'>
          <span className='userCabinet__label'>Ім&apos;я</span>
          <input
            type='text'
            className='userCabinet__input'
            onChange={(e) => inputChangeHandler(e)}
            name='firstName'
            value={formData.firstName}
            placeholder={user?.firstName === '' ? 'Не вказано' : user?.firstName}
          />
        </div>

        <div className='userCabinet__group'>
          <span className='userCabinet__label'>Прізвище</span>
          <input
            type='text'
            className='userCabinet__input'
            onChange={(e) => inputChangeHandler(e)}
            name='secondName'
            value={formData.secondName}
            placeholder={user?.secondName === '' ? 'Не вказано' : user?.secondName}
          />
        </div>

        <div className='userCabinet__group'>
          <span className='userCabinet__label'>Email</span>
          <input
            type='text'
            className='userCabinet__input'
            onChange={(e) => inputChangeHandler(e)}
            name='email'
            value={formData.email}
            placeholder={user?.email === '' ? 'Не вказано' : user?.email}
          />
        </div>

        <div className='userCabinet__group'>
          <span className='userCabinet__label'>Телефон</span>
          <input
            type='text'
            className='userCabinet__input'
            onChange={(e) => inputChangeHandler(e)}
            name='phone'
            value={formData.phone}
            placeholder={user?.phone === '' ? 'Не вказано' : user?.phone}
          />
        </div>

        <button
          type='submit'
          className={loading ? 'userCabinet__submitBtn saving' : 'userCabinet__submitBtn'}
          disabled={isEqual(formData, userFromContext)}>
          {!loading ? (
            'Зберегти'
          ) : (
            <>
              <span>Зберігаємо</span>
              <Rings wrapperClass='btnLoaderIcon' color='#333' />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default UserCabinetProfile;
