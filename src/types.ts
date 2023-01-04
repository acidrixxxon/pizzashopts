import { IPizzaIngridientFull, IPizzaIngridientShort, IPizzaMain, IPizzaSize } from './types/ProductTypes';

export type initialStateType = {
  cart: ICart;
  category: number;
  sort: number;
  customerData: ICustomerData;
  paymentType: null | { id: number; title: string };
  productDetails: IPizzaMain;
};

export interface ICart {
  totalItems: number;
  totalCost: number;
  items: [IPizzaInCart, IDrinkInCart, ISideInCart] | [];
}
export interface ICustomerData {
  name: string;
  firstName?: string;
  phone: string;
  email: string;
  street: string;
  room: string;
  floor: string;
  comment: string;
  orderType: number;
  restaurant?: {
    id: number;
    address: string;
  } | null;
  city?: {
    id: number;
    name: string;
  } | null;
  house: string;
  errors: IErrors;
  paymentType?: { id: number; title: string } | null;
}

export interface IErrors {
  name: string[] | null;
  phone: string[] | null;
  email: string[] | null;
  street: string[] | null;
  room?: string[] | null;
  floor?: string[] | null;
  comment?: string[] | null;
  house: string[] | null;
  paymentType: string[] | null;
  city: string[] | null;
  restaurant: string[] | null;
}

export interface SearchResultInterface {
  category: number;
  defaultPrice: number;
  id: number;
  imageUrl: string;
  rating: number;
  title: string;
  variants: IPizzaSize[];
  ingridients: IIngridients1[];
}

export interface CartItemInterface {
  fulltitle: string;
  id: number;
  imageUrl: string;
  inSell: boolean;
  ingridients: IPizzaIngridientFull[];
  price: number;
  qty: number;
  title: string;
  uniqueId?: string;
}

export interface ISortVariant {
  id: number;
  title: string;
}

export interface IIngridient {
  title: string;
  imageUrl: string;
  category: string;
  addPrice: number;
  _id: string;
}
export interface IIngridients1 {
  ingridientId: IIngridient;
  _id: string;
  qty: number;
}

export interface IPizzaInCart {
  fulltitle: string;
  _id: string;
  imageUrl: string;
  fullimageUrl: string | undefined;
  isSell: boolean | undefined;
  ingridients: IPizzaIngridientShort[];
  price: number;
  qty: number;
  title: string;
  uniqueId: string;
  class: number;
  size?: undefined;
  id?: undefined;
}

export interface IDrinkInCart {
  _id: string;
  imageUrl: string;
  price: number;
  qty: number;
  size: string;
  uniqueId: string;
  category: string;
  title: string;
  class: number;
  ingridients?: IPizzaIngridientShort[];
  fulltitle?: undefined;
  id?: undefined;
}

export interface ISideInCart {
  _id: string;
  imageUrl: string;
  price: number;
  qty: number;
  size: string;
  title: string;
  category: string;
  uniqueId: string;
  class: number;
  ingridients?: IPizzaIngridientShort[];
  fulltitle?: string;
}

export interface IDeliveryInCart {
  id: number;
  title: string;
  price: number;
  items?: undefined;
  ingridients?: undefined;
  class?: undefined;
  size?: undefined;
  imageUrl?: undefined;
  _id?: undefined;
  uniqueId?: undefined;
  qty?: number;
}

export interface AdditionalTypes {
  id?: undefined;
}

export interface ISideCategory1 {
  title: string;
  _id: string | undefined;
  products: ISide[] | [];
}

export interface ISideCategory {
  id: number;
  title: string;
  _id?: string | undefined;
}

export interface ISide {
  class: number;
  category: string;
  _id: string;
  title: string;
  imageUrl: string;
  defaultPrice: number;
  variants: SideVariants[];
  ingridients?: IPizzaIngridientShort[];
}

export interface SideVariants {
  size: string;
  price: number;
  _id: string;
  variants?: null;
  title?: string;
}

export interface IDrink {
  class: number;
  category: number;
  id: number;
  title: string;
  imageUrl: string;
  defaultPrice: number;
  variants: DrinkVariants[];
  _id?: string;
  ingridients?: IPizzaIngridientShort[];
}

export interface DrinkVariants {
  size: string;
  price: number;
  _id?: string;
  variants?: null;
  title?: string;
}

export interface IDrinkCategory {
  id: number;
  title: string;
}

export interface IDrinkNew {
  _id: string;
  title: string;
  defaultPrice: number;
  newProduct: boolean;
  rating: number;
  class: number;
  category: string;
  imageUrl: string;
  variants: [
    {
      size: string;
      price: number;
      _id: string;
    },
  ];
}

export interface IDrinkCategoryResponse {
  message: string;
  success: boolean;
  categories: IDrinkCategory1[];
}

export interface IDrinkProductsResponse {
  message: string;
  success: boolean;
  products: IDrinkNew[] | null;
}

export interface IDrinkCategory1 {
  _id: string;
  title: string;
  products: IDrinkNew[];
}

export interface IPaymentVariants {
  id: number;
  title: string;
}

export interface IOrderObj {
  items: CartItemInterface[];
  totalItems: number;
  totalCost: number;
  customerData: {
    name: string;
    phone: string;
    email: string;
    orderType: number;
    street: string;
    house: string;
    room: string;
    floor: string;
    comment: string;
  };
}

export interface IActionSetCategory {
  type: string;
  payload: number;
}

export interface ICartReducer {
  cart: ICart;
  paymentType: {
    id: number;
    title: string;
  };
}

export interface IRestaurant {
  id: number;
  address: string;
}

export interface ICity {
  id: number;
  name: string;
  restaurants: IRestaurant[];
}

export interface ISidesCategories {
  title: string;
  _id: string;
}
