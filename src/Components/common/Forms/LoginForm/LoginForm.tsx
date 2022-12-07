import { motion } from 'framer-motion';
import React from 'react';

import './_LoginForm.scss';
import { Context1 } from '../../../../Context/Context';
import Error from '../../Error/Error';
import { getUserActions } from '../../../../Context/actions/userActions';
import { ILoginUser } from '../../../../types/UserTypes';

interface IErrors {
  email: null | string[];
  password: null | string[];
}

const LoginForm: React.FC = () => {
  const [data, setData] = React.useState<ILoginUser>({ email: '', password: '' });
  const [errors, setErrors] = React.useState<IErrors>({ email: null, password: null });

  const { dispatch } = React.useContext(Context1);

  const { loginUserProccess } = getUserActions(dispatch);

  const loginHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (data.email.trim() === '') {
      setErrors((state) => ({
        ...state,
        login: ['Введіть телефон або email!'],
      }));
    }

    if (data.password === '') {
      setErrors((state) => ({
        ...state,
        password: ['Введіть пароль!'],
      }));
    } else if (data.password.length < 8) {
      setErrors((state) => ({
        ...state,
        password: ['Пароль має бути від 8ми символів!'],
      }));
    }

    loginUserProccess({ email: data.email, password: data.password });
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((state) => ({ ...state, [e.target.name]: null }));
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <motion.form
      onSubmit={loginHandler}
      initial={{ opacity: 0, transform: 'scale(.8)' }}
      animate={{ opacity: 1, transform: 'scale(1)' }}
      exit={{ opacity: 0, transform: 'scale(.8)' }}
      id='loginForm'>
      <div className='loginForm__group'>
        <div className='loginForm__inputWrapper'>
          <input type='text' className='loginForm__input' name='email' value={data.email} onChange={inputChangeHandler} />
        </div>

        <span className={data.email !== '' ? 'loginForm__label label_on_top' : 'loginForm__label'}>Телефон або email</span>

        {errors.email !== null && <Error value={errors.email} className='loginForm__inputError' />}
      </div>

      <div className='loginForm__group'>
        <div className='loginForm__inputWrapper'>
          <input type='password' className='loginForm__input' name='password' value={data.password} onChange={inputChangeHandler} />
        </div>

        <span className={data.password !== '' ? 'loginForm__label label_on_top' : 'loginForm__label'}>Пароль</span>

        {errors.password !== null && <Error value={errors.password} className='loginForm__inputError' />}
      </div>

      <button
        type='submit'
        disabled={data.email == '' && data.password == ''}
        className={data.email !== '' && data.password !== '' ? 'loginForm__loginBtn' : 'loginForm__loginBtn inactiveBtn'}>
        Увійти
      </button>

      <span className='loginForm__forgotPassword'>Забули пароль?</span>
    </motion.form>
  );
};

export default LoginForm;
