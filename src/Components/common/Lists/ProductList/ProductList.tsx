import React from 'react'
import { Context1 } from '../../../../Context/Context'
import DrinkList from '../DrinkList/DrinkList'
import PizzaList from '../PizzaList/PizzaList'
import SideList from '../SideList/SideList'

const ProductList: React.FC = () => {
    const { state: { sort: { category }}} = React.useContext(Context1)

        return (
            <>
                {category === 0 && <PizzaList />}
                {category === 1 && <SideList />}
                {category === 2 && <DrinkList />}
            </>
        )
}

export default ProductList