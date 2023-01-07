import React from 'react';

import { Context1 } from '../../../../Context/Context';
import DrinkList from './components/DrinkList/DrinkList';
import PizzaList from './components/PizzaList/PizzaList';
import SideList from './components/SideList/SideList';

const ProductList: React.FC = () => {
  const lists = [
    { categoryId: 0, component: <PizzaList /> },
    { categoryId: 1, component: <SideList /> },
    { categoryId: 2, component: <DrinkList /> },
  ];
  const {
    state: {
      sort: { category },
    },
  } = React.useContext(Context1);

  return <>{lists.map((item) => (category === item.categoryId ? item.component : null))}</>;
};

export default ProductList;
