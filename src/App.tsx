import React from 'react'
import './scss/_base.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home/HomePage';
import CartPage from './Pages/Cart/CartPage';
import ProductPage from './Pages/Product/ProductPage';
import OrderStatus from './Pages/OrderDetails/OrderStatus';
import LocalStorageService from './Services/LocalStorageService';
import { Context1 } from './Context/Context';
import { io } from 'socket.io-client'


function App() {
  const [ pos,setPos ] = React.useState<any>(null)

  const appEl = React.useRef<HTMLDivElement | null>(null)

  const { state: { cart,view: { authModal } }} = React.useContext(Context1)
  
  // navigator.geolocation.getCurrentPosition((pos) => setPos(pos))
  const socket = io('http://localhost:3000')

  React.useEffect(() => {
    socket.on('recieve_message',(data) => console.log(data))
    socket.on('db_change',data => console.log(data))
    socket.emit('send_message',{message: 'hello'})
  },[])
  

  React.useEffect(() => {
    const onScroll = (e: any) => {
      const scrollTop = window.scrollY;
      if (appEl !== null) {
        scrollTop >= 70 ?  appEl.current?.classList.add('padding-top'): appEl.current?.classList.remove('padding-top')
      }
    }

    window.addEventListener('scroll',onScroll)

    return () => {
      window.removeEventListener('scroll',onScroll)
    }

  },[])

  React.useEffect(() => {
    LocalStorageService.saveCartUpdate(cart)
  },[cart])
  
  return (
    <div className={authModal.status === 'active' ? "App no-scroll" : 'App'} ref={appEl}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/order-status/:id" element={<OrderStatus />} />
      </Routes>
    </div>
  );
}


export default App;
