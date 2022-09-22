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


function App() {
  const [ pos,setPos ] = React.useState<any>(null)
  console.log(pos)
  const appEl = React.useRef<HTMLDivElement | null>(null)

  const { state: { cart }} = React.useContext(Context1)
  
  navigator.geolocation.getCurrentPosition((pos) => setPos(pos))
  
  console.log(cart)

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
    <div className="App" ref={appEl}>
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
