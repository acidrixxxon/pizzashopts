import { ICustomerData, IDrinkInCart, IErrors, IIngridients, IIngridientsFull, IPizza, IPizzaInCart, ISideInCart, PizzaProductSizeInterface } from "../types"

export type IAction =
    | { type: 'ADD_TO_CART',payload: ICartItem}
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
    | { type: 'ADD_INGRIDIENT_TO_PIZZA',payload: {ingridients: IIngridients[],variants: PizzaProductSizeInterface[]}}
    | { type: 'CHANGE_INGRIDIENT_QTY',payload: IPizza}
    | { type: 'UPDATE_CART',payload: ICart}
    | { type: 'SET_AUTH_MODAL_STATUS',payload: 'active' | 'inactive'}

//Context actions types
export interface IActionsList {
    setCategory: (id:number) => void,
    setSort: (id: number) => void,
    addToCart: (item: ICartItem) => void,
    changeItemQty: (type: string,id: string) => void,
    toggleExtraMocarella: (id: string,type: string) => void
    clearCart: () => void,
    setCustomerData: (e: React.ChangeEvent<HTMLInputElement>) => void
    setFieldError: (errors: IErrors) => void,
    removeFromCart: (item: IPizzaInCart | IDrinkInCart | ISideInCart) => void,
    setProductDetails: (product: IPizza) => void,
    addIngridientToPizza: (ingridient: IIngridients) => void,
    changeIngridientQty: (type: string,ingridient: IIngridientsFull) => void,
    setAuthModalStatus: (status: 'active' | 'inactive') => void
}

export interface IInitialState {
    sort: ISort,
    cart: ICart,
    customerData: ICustomerData,
    productDetails: IPizza,
    view: IView
}

export interface ICartItem {
    fulltitle: string,
    id: number,
    imageUrl: string,
    inSell: boolean,
    ingridients: IIngridients[],
    price: number,
    qty: number,
    title: string,
    uniqueId?: string,
    productClass: number,
    size?: string
}

 export interface IPizzaIngridient {
    id: number,
    qty: number
}

//Interface sortirovki v state contexta
export interface ISort {
    sort: number,
    category: number
}
    
export interface ICart {
    items: ICartItem[],
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