import { IInitialState, IProvider } from './context_types';
import { initialCartState, initialCustomerData, initialProductDetails } from '../Utils/initialStore';

import React from 'react';
import { rootReducer } from './reducers/rootReducer';

const initialState: IInitialState = {
  sort: {
    sort: 0,
    category: 0,
  },
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : initialCartState,
  customerData: localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer') || '{}') : initialCustomerData,
  productDetails: initialProductDetails,
  view: {
    authModal: {
      status: 'inactive',
    },
    loaders: {
      refreshTokenLoading: 'active',
    },
  },
  user: null,
  socket: null,
};

interface ContextInterface {
  state: IInitialState;
  dispatch: React.Dispatch<any>;
}

const Context1 = React.createContext<ContextInterface>({ state: initialState, dispatch: () => null });

const StateProvider: React.FC<IProvider> = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, initialState);

  return <Context1.Provider value={{ state, dispatch }}>{children}</Context1.Provider>;
};

export { StateProvider, Context1 };
