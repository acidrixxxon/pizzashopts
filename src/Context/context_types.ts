import { type } from 'os';
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
import { IPizza, IPizzaIngridientFull, IPizzaSize } from '../types/ProductTypes';

export type IAction =
  | { type: 'ADD_TO_CART'; payload: any }
  | { type: 'SET_SORT'; payload: number }
  | { type: 'SET_CATEGORY'; payload: number }
  | { type: 'CHANGE_ITEM_QTY'; payload: ICart }
  | {
      type: 'TOGGLE_EXTRA_MOCARELLA';
      payload: {
        totalCost: number;
        items: ICartItem[];
      };
    }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_CUSTOMER_DATA'; payload: React.ChangeEvent<HTMLInputElement> }
  | { type: 'SET_PAYMENT_TYPE'; payload: IPaymentVariants | null }
  | { type: 'SET_ORDER_TYPE'; payload: number }
  | { type: 'SET_FIELD_ERROR'; payload: IErrors }
  | { type: 'REMOVE_FROM_CART'; payload: IPizzaInCart | IDrinkInCart | ISideInCart }
  | { type: 'SET_PRODUCT_DETAILS'; payload: IPizza }
  | { type: 'ADD_INGRIDIENT_TO_PIZZA'; payload: { ingridients: IIngridients1[]; variants: IPizzaSize[] } }
  | { type: 'CHANGE_INGRIDIENT_QTY'; payload: IPizza }
  | { type: 'UPDATE_CART'; payload: ICart }
  | { type: 'SET_AUTH_MODAL_STATUS'; payload: 'active' | 'inactive' }
  | { type: 'LOGIN_USER'; payload: IUser | null }
  | { type: 'LOGOUT_USER' }
  | { type: 'UPDATE_PROFILE'; payload: IUser }
  | { type: 'SET_SOCKET'; payload: any | null }
  | { type: 'SET_REFRESH_TOKEN_LOADING'; payload: 'active' | 'inactive' };

//Context actions types

export interface IInitialState {
  sort: ISort;
  cart: ICart;
  customerData: ICustomerData;
  productDetails: IPizza;
  view: IView;
  user: IUser | null;
  socket: any | null;
}

export interface IUser {
  email: string;
  isAdmin: boolean;
  firstName: string;
  secondName: string;
  phone: string;
  tokens?: {
    accessToken: string;
    refreshToken: string;
  };
  confirmed: boolean;
  _id: string;
}

export interface ICartItem {
  fulltitle: string;
  _id: string;
  imageUrl: string;
  isSell: boolean;
  ingridients?: IIngridients1[];
  price: number;
  qty: number;
  title: string;
  uniqueId?: string;
  productClass: number;
  size?: string;
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
  authModal: {
    status: string;
  };
  loaders: {
    refreshTokenLoading: string;
  };
}
