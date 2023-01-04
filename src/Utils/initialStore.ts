import { ICart, ICustomerData, IErrors } from '../types';
import { IPizzaMain } from '../types/ProductTypes';

export const initialCustomerDataErrors: IErrors = {
  name: null,
  phone: null,
  email: null,
  street: null,
  house: null,
  paymentType: null,
  restaurant: null,
  city: null,
};

export const initialCustomerData: ICustomerData = {
  name: '',
  firstName: '',
  phone: '',
  email: '',
  street: '',
  house: '',
  room: '',
  floor: '',
  comment: '',
  orderType: 0,
  restaurant: null,
  city: null,
  errors: initialCustomerDataErrors,
  paymentType: null,
};

export const initialCartState: ICart = {
  totalItems: 0,
  totalCost: 0,
  items: [],
};

export const initialProductDetails: IPizzaMain = {
  category: '0',
  _id: '0',
  imageUrl: '',
  fullimageUrl: '',
  ingridients: [],
  defaultPrice: 0,
  title: '',
  class: 0,
  variants: [],
  defaultObj: {
    category: '0',
    _id: '0',
    imageUrl: '',
    fullimageUrl: '',
    ingridients: [],
    title: '',
    class: 0,
    variants: [],
    defaultPrice: 0,
  },
};
