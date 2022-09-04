import React from 'react'
import './scss/_base.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Pages/Home/HomePage';
import CartPage from './Pages/Cart/CartPage';
import ProductPage from './Pages/Product/ProductPage';


function App() {
  const appEl = React.useRef<HTMLDivElement | null>(null)

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
  
  return (
    <div className="App" ref={appEl}>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}


export default App;
