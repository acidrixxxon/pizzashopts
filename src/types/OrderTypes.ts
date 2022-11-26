
import { IDeliveryInCart, IDrinkInCart, IPizzaInCart, ISideInCart } from "../types"

interface IOrderCart {
  items: Array<IDrinkInCart | IPizzaInCart |ISideInCart | IDeliveryInCart>,
  totalItems: number,
  totalCost: number
}

export interface IOrderDetails {
  orderType: {
    id: number,
    title: string
  },
  paymentType: {
    id: number,
    title: string
  },
  customerData: {
    email: string,
    phone: string,
    floor: string,
    room: string,
    name: string,
    comment: string,
    house: string,
    street: string
  }
}

export interface INewOrder {
  cart: IOrderCart,
  details: IOrderDetails,
  _id?: string
}

export interface IOrderFromServer {
  _id: string,
  createdAt: string,
  updatedAt: string,
  cart: IOrderCart,
  details: IOrderDetails,
  status: {
    id: number,
    title: string
  }
}

export interface INewOrderResponse {
  message: string,
  success: boolean,
  order: IOrderFromServer
}

export interface INewOrderResponseWithError {
  errorMessage: string,
  success: boolean,
  order?: null
}

export interface IGetOrderByIdResponse {
  message: string,
  success: boolean,
  order: IOrderFromServer
}

export interface IGetOrderByIdResponseWithError {
  errorMessage: string,
  success: boolean,
  order?: null
}