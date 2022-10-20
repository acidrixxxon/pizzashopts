import React from 'react'
import { motion } from 'framer-motion'
import './_LoginForm.scss'
import Error from '../../Error/Error'

const LoginForm:React.FC = () => {
  const [ data,setData ] = React.useState<{login: string,password: string}>({login: '',password: ''})
  const [ errors,setErrors ] = React.useState({login: null,password: null})

  return (
    <motion.form            
      initial={{ opacity: 0,transform: 'scale(.8)' }}
      animate={{ opacity: 1,transform: 'scale(1)' }}
      exit={{ opacity: 0,transform: 'scale(.8)' }} 
      id="loginForm">

      <div className="loginForm__group">
        <div className="loginForm__inputWrapper">
          <input type="text" className="loginForm__input" value={data.login} onChange={(e) => setData(state => ({...state,login: e.target.value}))}/>
        </div>

        <span className={data.login !== '' ? "loginForm__label label_on_top" : "loginForm__label"}>Телефон або email</span>

        <Error value={['Введіть номер телефону або email!']} className='loginForm__inputError' />
      </div>

      <div className="loginForm__group">
        <div className="loginForm__inputWrapper">
          <input type="text" className="loginForm__input" value={data.password} onChange={(e) => setData(state => ({...state,password: e.target.value}))} />
        </div>

        <span className={data.password !== '' ? "loginForm__label label_on_top" : "loginForm__label"}>Пароль</span>

        <Error value={['Введіть пароль!']} className='loginForm__inputError' />
      </div>

      <button className='loginForm__loginBtn'>Увійти</button>

      <span className="loginForm__forgotPassword">Забули пароль?</span>
    </motion.form>
  )
}

export default LoginForm