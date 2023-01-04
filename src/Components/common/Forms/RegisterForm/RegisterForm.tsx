import { motion } from 'framer-motion';
import React from 'react';
import { AiFillEye, AiFillEyeInvisible, AiOutlineCheck } from 'react-icons/ai';
import { Rings } from 'react-loader-spinner';
import { toast } from 'react-toastify';

import { Context1 } from '../../../../Context/Context';
import { getUserActions } from '../../../../Context/actions/userActions';
import { IRegisterErrors } from '../../../../types/ErrorTypes';
import Error from '../../Error/Error';
import './_RegisterForm.scss';

interface IFormField {
  email: string;
  password: string;
  copyPassword: string;
}

interface IShowPassword {
  password: boolean;
  copyPassword: boolean;
}

const RegisterForm: React.FC = () => {
  const [data, setData] = React.useState<IFormField>({ email: '', password: '', copyPassword: '' });
  const [showPassword, setShowPassword] = React.useState<IShowPassword>({ password: false, copyPassword: false });
  const [errors, setErrors] = React.useState<IRegisterErrors>({ email: null, password: null, copyPassword: null });
  const [status, setStatus] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const { dispatch } = React.useContext(Context1);
  const { registerUserProcess } = getUserActions(dispatch);

  const registerHandler = async (e: React.FormEvent<HTMLFormElement>): Promise<any> => {
    e.preventDefault();
    setLoading(true);
    setErrors({ email: null, password: null, copyPassword: null });

    if (data.password !== data.copyPassword) {
      setErrors((state) => ({
        ...state,
        password: ['Паролі не співпадають'],
        copyPassword: ['Паролі не співпадають'],
      }));

      setLoading(false);
      return;
    }

    if (errors.email === null && errors.password === null && errors.copyPassword === null) {
      const { success, message, user } = await registerUserProcess(data);
      if (success === true && user) {
        setStatus(true);
      } else {
        toast.error(message);
      }
      setLoading(false);
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const showPasswordHandler = (type: string): void => {
    if (type === 'password') {
      setShowPassword((state) => ({ ...state, password: !state.password }));
    } else if (type === 'copyPassword') {
      setShowPassword((state) => ({ ...state, copyPassword: !state.copyPassword }));
    }
  };

  return (
    <>
      {status === false ? (
        <motion.form
          onSubmit={registerHandler}
          initial={{ opacity: 0, transform: 'scale(.8)' }}
          animate={{ opacity: 1, transform: 'scale(1)' }}
          exit={{ opacity: 0, transform: 'scale(.8)' }}
          id='registerForm'>
          <div className='registerForm__group field__group'>
            <div className='registerForm__inputWrapper field__inputWrapper'>
              <input type='text' name='email' className='registerForm__input field__input' onChange={inputChangeHandler} />
            </div>

            <span className={data.email !== '' ? 'registerForm__label label_onTop field__label' : 'registerForm__label field__label'}>
              Email
            </span>

            {errors.email !== null && <Error value={errors.email} className='regsiterForm__inputError' />}
          </div>

          <div className='registerForm__group field__group'>
            <div className='registerForm__inputWrapper field__inputWrapper'>
              <input
                type={showPassword.password ? 'text' : 'password'}
                name='password'
                className='registerForm__input field__input'
                onChange={inputChangeHandler}
              />

              {data.password !== '' ? (
                showPassword.password !== true ? (
                  <AiFillEye className='watchPassword' onClick={() => showPasswordHandler('password')} />
                ) : (
                  <AiFillEyeInvisible className='hidePassword' onClick={() => showPasswordHandler('password')} />
                )
              ) : (
                ''
              )}
            </div>

            <span
              className={data.password !== '' ? 'registerForm__label label_onTop field__label' : 'registerForm__label field__label'}>
              Пароль
            </span>

            {errors.password !== null && <Error value={errors.password} className='regsiterForm__inputError' />}
          </div>

          <div className='registerForm__group field__group'>
            <div className='registerForm__inputWrapper field__inputWrapper'>
              <input
                type={showPassword.copyPassword ? 'text' : 'password'}
                name='copyPassword'
                className='registerForm__input field__input'
                onChange={inputChangeHandler}
              />

              {data.copyPassword !== '' ? (
                showPassword.password !== true ? (
                  <AiFillEye className='watchPassword' onClick={() => showPasswordHandler('copyPassword')} />
                ) : (
                  <AiFillEyeInvisible className='hidePassword' onClick={() => showPasswordHandler('copyPassword')} />
                )
              ) : (
                ''
              )}
            </div>

            <span
              className={
                data.copyPassword !== '' ? 'registerForm__label label_onTop field__label' : 'registerForm__label field__label'
              }>
              Введіть пароль повторно
            </span>

            {errors.copyPassword !== null && <Error value={errors.password} className='regsiterForm__inputError' />}
          </div>

          <button
            className={
              data.email !== '' && data.password !== '' && data.copyPassword !== ''
                ? 'registerForm__registerBtn'
                : 'registerForm__registerBtn inactiveBtn'
            }
            type='submit'>
            {loading ? (
              <span className='loading'>
                Реєструємо <Rings height={30} width={30} color='#fff' />
              </span>
            ) : (
              'Реєстрація'
            )}
          </button>
        </motion.form>
      ) : (
        <div className='registerForm__confirm'>
          <p className='registerForm__confirmMessage'>
            Для завершенння реєстрації Вам потрібно перейти по лінку у відомленні яке ми надіслали на вказану електронну пошту!
          </p>
          <span className='registerForm__confirmIcon'>
            <AiOutlineCheck className='registerForm__icon' />
          </span>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
