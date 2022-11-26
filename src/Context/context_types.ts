import { ICustomerData, IDeliveryInCart, IDrinkInCart, IErrors, IIngridients1, IPizzaInCart, ISideInCart } from "../types"
import {  IPizza, IPizzaIngridientFull, IPizzaSize } from "../types/ProductTypes"

export type IAction =
    | { type: 'ADD_TO_CART',payload: any}
    | { type: 'SET_SORT',payload: number}
    | { type: 'SET_CATEGORY',payload: number}
    | { type: 'CHANGE_ITEM_QTY',payload: ICart}
    | { type: 'TOGGLE_EXTRA_MOCARELLA',payload: {
        totalCost: number,
        items: ICartItem[]
    }}
    | { type: 'CLEAR_CART'}
    | { type: 'SET_CUSTOMER_DATA',payload: React.ChangeEvent<HTMLInputElement>}
    | { type: 'SET_FIELD_ERROR',payload: IErrors}
    | { type: 'REMOVE_FROM_CART',payload: IPizzaInCart | IDrinkInCart | ISideInCart}
    | { type: 'SET_PRODUCT_DETAILS',payload: IPizza}
    | { type: 'ADD_INGRIDIENT_TO_PIZZA',payload: {ingridients: IIngridients1[],variants: IPizzaSize[]}}
    | { type: 'CHANGE_INGRIDIENT_QTY',payload: IPizza}
    | { type: 'UPDATE_CART',payload: ICart}
    | { type: 'SET_AUTH_MODAL_STATUS',payload: 'active' | 'inactive'}
    | { type: 'LOGIN_USER',payload: IUser | null}
    | { type: 'LOGOUT_USER'}
    | { type: 'SET_SOCKET',payload: any | null}

//Context actions types
export interface IActionsList {
    setCategory: (id:number) => void,
    setSort: (id: number) => void,
    addToCart: (item: any) => void,
    changeItemQty: (type: string,id: string) => void,
    toggleExtraMocarella: (id: string,type: string) => void
    clearCart: () => void,
    setCustomerData: (e: React.ChangeEvent<HTMLInputElement>) => void
    setFieldError: (errors: IErrors) => void,
    removeFromCart: (item: IPizzaInCart | IDrinkInCart | ISideInCart) => void,
    setProductDetails: (product: IPizza) => void,
    addIngridientToPizza: (ingridient: IPizzaIngridientFull) => void,
    changeIngridientQty: (type: string,ingridient: IPizzaIngridientFull) => void,
    setAuthModalStatus: (status: 'active' | 'inactive') => void,
    loginUserProcess: (user: {email: string,password: string} | null) => void,
    userLogoutProcess: () => void,
    setSocket: (socket: any | null) => void
}

export interface IInitialState {
    sort: ISort,
    cart: ICart,
    customerData: ICustomerData,
    productDetails: IPizza,
    view: IView,
    user: IUser | null,
    socket: any | null
}

export interface IUser {
    email: string,
    isAdmin: boolean
}

export interface ICartItem {
    fulltitle: string,
    _id: string,
    imageUrl: string,
    isSell: boolean,
    ingridients?: IIngridients1[],
    price: number,
    qty: number,
    title: string,
    uniqueId?: string,
    productClass: number,
    size?: string
}

export interface ISort {
    sort: number,
    category: number
}
    
export interface ICart {
    items: (IPizzaInCart | IDrinkInCart | ISideInCart | IDeliveryInCart)[],
    totalCost: number,
    totalItems: number
}
    
export interface IProvider {
    children: React.ReactNode
}

export interface IView {
    authModal: {
        status: string
    }
}
