import { motion } from 'framer-motion';
import React from 'react';
import { Rings } from 'react-loader-spinner';

import { validateLoginUserForm } from '../../../../Utils/Validation';
import { useContextActions } from '../../../../hooks/useContextActions';
import { ILoginErrors } from '../../../../types/ErrorTypes';
import { ILoginUser } from '../../../../types/UserTypes';
import Error from '../../Error/Error';
import './_LoginForm.scss';

const LoginForm: React.FC = () => {
  const [data, setData] = React.useState<ILoginUser>({ email: '', password: '' });
  const [errors, setErrors] = React.useState<ILoginErrors>({ email: null, password: null });
  const [loading, setLoading] = React.useState<boolean>(false);

  const {
    userActions: { loginUserProccess },
  } = useContextActions();

  const loginHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();

    setLoading(true);
    const { result, errors } = validateLoginUserForm(data);

    if (result === true) {
      loginUserProccess({ email: data.email, password: data.password });
      setErrors({ email: null, password: null });
    } else {
      setErrors(errors);
    }
  };

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((state) => ({ ...state, [e.target.name]: null }));
    setData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  return (
    <motion.form
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
        onClick={loginHandler}
        type='submit'
        disabled={data.email == '' && data.password == ''}
        className={data.email !== '' && data.password !== '' && !loading ? 'loginForm__loginBtn' : 'loginForm__loginBtn inactiveBtn'}>
        {loading ? (
          <span className='loading'>
            Входимо <Rings height={30} width={30} color='#fff' />
          </span>
        ) : (
          'Увійти'
        )}
      </button>

      <span className='loginForm__forgotPassword'>Забули пароль?</span>
    </motion.form>
  );
};

export default LoginForm;
