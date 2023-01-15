import {
  ICustomerData,
  IDeliveryInCart,
  IDrinkInCart,
  IErrors,
  IIngridients1,
  IPaymentVariants,
  IPizzaInCart,
  ISideInCart,
} from '../types';
import { IDrinkMain, IPizzaIngridientShort, IPizzaMain, IPizzaSize, ISideMain } from '../types/ProductTypes';
import { IUser, IUserUpdateData } from '../types/UserTypes';

export type IAction =
  | { type: 'ADD_TO_CART'; payload: any }
  | { type: 'SET_SORT'; payload: number }
  | { type: 'SET_CATEGORY'; payload: number }
  | { type: 'CHANGE_ITEM_QTY'; payload: ICart }
  | {
      type: 'TOGGLE_EXTRA_MOCARELLA';
      payload: {
        totalCost: number;
        items: (IPizzaInCart | IDrinkInCart | ISideInCart)[];
      };
    }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CUSTOMER_DATA'; payload: React.ChangeEvent<HTMLInputElement> }
  | { type: 'SET_PAYMENT_TYPE'; payload: IPaymentVariants | null }
  | { type: 'SET_ORDER_TYPE'; payload: number }
  | { type: 'SET_FIELD_ERROR'; payload: IErrors }
  | { type: 'REMOVE_FROM_CART'; payload: IPizzaInCart | IDrinkInCart | ISideInCart }
  | { type: 'SET_PRODUCT_DETAILS'; payload: IPizzaMain }
  | { type: 'INIT_CUSTOMER_DATA'; payload: IUserUpdateData }
  | { type: 'ADD_INGRIDIENT_TO_PIZZA'; payload: { ingridients: IIngridients1[]; variants: IPizzaSize[] } }
  | { type: 'CHANGE_INGRIDIENT_QTY'; payload: IPizzaMain }
  | { type: 'UPDATE_CART'; payload: ICart }
  | { type: 'SET_AUTH_MODAL_STATUS'; payload: 'active' | 'inactive' }
  | { type: 'LOGIN_USER'; payload: IUser | null }
  | { type: 'LOGOUT_USER' }
  | { type: 'UPDATE_PROFILE'; payload: IUser }
  | { type: 'SET_SOCKET'; payload: any | null }
  | { type: 'SET_REFRESH_TOKEN_LOADING'; payload: 'active' | 'inactive' }
  | { type: 'SET_SEARCH_RESULT_MODAL_DATA'; payload: IDrinkMain | IPizzaMain | ISideMain | null }
  | { type: 'SET_SEARCH_RESULT_MODAL_VISIBILITY'; payload: 'hidden' | 'visible' }
  | { type: 'SEARCH_RESULT_ADD_INGRIDIENT'; payload: IPizzaMain }
  | { type: 'SEARCH_RESULT_REMOVE_INGRIDIENT'; payload: IPizzaMain }
  | { type: 'TOGGLE_MOBILE_NAV_VISIBILITY'; payload: string };

//Context actions types

export interface IInitialState {
  sort: ISort;
  cart: ICart;
  customerData: ICustomerData;
  productDetails: IPizzaMain;
  view: IView;
  user: IUser | null;
  socket: any | null;
}

export interface ISort {
  sort: number;
  category: number;
}

export interface ICart {
  items: (IPizzaInCart | IDrinkInCart | ISideInCart | IDeliveryInCart)[];
  totalCost: number;
  totalItems: number;
}

export interface IProvider {
  children: React.ReactNode;
}

export interface IView {
  nav: {
    mobileNav: {
      status: string;
    };
  };
  authModal: {
    status: string;
  };
  search: {
    searchResultModal: {
      status: 'visible' | 'hidden';
      data: IPizzaMain | IDrinkMain | ISideMain | null;
    };
  };
  loaders: {
    refreshTokenLoading: string;
  };
}
