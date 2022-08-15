import React from 'react'
import Categories from '../../Components/common/Categories/Categories'
import Container from '../../Components/common/Container/Container'
import Sort from '../../Components/common/Sort/Sort'
import './_HomePage.scss'

const HomePage = () => {
  return (
    <div id='home'>
        <Container>
            <div className="home__headline">
                <Categories />

                <Sort />
            </div>
            HomePage
        </Container>
    </div>
  )
}

export default HomePage