import React from 'react'
import { Context } from '../../../../Context'
import DrinkList from '../DrinkList/DrinkList'
import PizzaList from '../PizzaList/PizzaList'
import SideList from '../SideList/SideList'

const ProductList: React.FC = () => {
    const { state: { category }} = React.useContext(Context)

        return (
            <>
                {category === 0 && <PizzaList />}
                {category === 1 && <SideList />}
                {category === 2 && <DrinkList />}
            </>
        )
}

export default ProductList