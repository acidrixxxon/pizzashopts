import React from 'react'

import Categories from '../../Components/common/Categories/Categories'
import Container from '../../Components/common/Container/Container'
import ProductList from '../../Components/common/Lists/ProductList/ProductList'
import Sort from '../../Components/common/Sort/Sort'
import Slider from '../../Components/Slider/Slider'

import './_HomePage.scss'

const HomePage: React.FC = () => {

  
  return (
    <div id='home'>
        <Container>
          <Slider />
          <div className="home__headline">
            <Categories />

            <Sort />
          </div>
            
          <div className="home__content">
            <ProductList />
          </div>
        </Container>
    </div>
  )
}

export default HomePage