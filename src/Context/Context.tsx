import React from 'react';

import { initialCartState, initialCustomerData, initialProductDetails } from '../Utils/initialStore';
import { IInitialState, IProvider } from './context_types';
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
    search: {
      searchResultModal: {
        status: 'hidden',
        data: null,
      },
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

export const useContextSelector = () => {
  const { state } = React.useContext(Context1);

  return state;
};

const StateProvider: React.FC<IProvider> = ({ children }) => {
  const [state, dispatch] = React.useReducer(rootReducer, initialState);

  return <Context1.Provider value={{ state, dispatch }}>{children}</Context1.Provider>;
};

export { Context1, StateProvider };
