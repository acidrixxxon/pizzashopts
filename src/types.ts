export type initialStateType = {
    cart: ICart,
    category: number,
    sort: number,
    customerData: ICustomerData,
    paymentType: null | {id: number,title: string},
    productDetails: IPizza 
}

export interface IActions {
    setCategory: (id:number) => void,
    changeIngridientQty: (type: string,ingridient: IIngridientsFull) => void,
    setSortType: (id: number) => void,
    addIngridient: (ingridient: IIngridients) => void,
    setPaymentType: (payment: IPaymentVariants) => void, 
    clearCart: () => void,
    setFieldError: (errors: IErrors) => void,
    setCustomerData: (e: React.ChangeEvent<HTMLInputElement>) => void,
    addDoubleMocarella: (id: string) => void,
    removeDoubleMocarella: (id: string) => void

}
export type Action =
 | { type: 'SET_CATEGORY',payload: number}
 | { type: 'SET_SORT',payload: number}
 | { type: 'ADD_TO_CART',payload: IPizzaInCart}
 | { type: 'CLEAR_CART'}
 | { type: 'REMOVE_FROM_CART',payload: IPizzaInCart | IDrinkInCart | ISideInCart}
 | { type: 'PLUS_QTY',payload:  number}
 | { type: 'MINUS_QTY',payload: number}
 | { type: 'SET_CUSTOMER_DATA',payload: React.ChangeEvent<HTMLInputElement>}
 | { type: 'SET_PAYMENT_TYPE',payload: IPaymentVariants}
 | { type: 'SET_PRODUCT_DETAILS',payload: IPizza}
 | { type: 'SET_INGRIDIENT_QTY',payload: IPizza }
 | { type: 'ADD_INGRIDIENT_TO_PIZZA',payload: {ingridients:  IIngridients[],variants: PizzaProductSizeInterface[]}}
 | { type: 'CLEAR_CART'}
 | { type : 'SET_FIELD_ERROR',payload: IErrors}
 | { type: 'ADD_DOUBLE_MOCARELLA',payload: {items: CartItemInterface[],totalCost:number}}
 | { type: 'REMOVE_DOUBLE_MOCARELLA',payload: {items: CartItemInterface[],totalCost: number}}

export interface PizzaProductCrustInterface {
    fulltitle: string,
    inSell: boolean,
    price: number,
    title: string,
    id: number
}

export interface ICart {
    totalItems: number,
    totalCost: number,
    items: CartItemInterface[]
}
export interface ICustomerData {
    name: string,
    phone: string,
    email: string,
    street: string,
    room: string,
    floor: string,
    comment: string,
    orderType: number,
    shop?: number,
    house: string,
    errors: IErrors,
    paymentType?: {id: number,title: string} | null
}

export interface IErrors {
    name: string[] | null ,
    phone: string[] | null ,
    email: string[] | null,
    street: string[] | null,
    room?: string[] | null,
    floor?: string[] | null,
    comment?: string[] | null,
    house: string[] | null,
    paymentType: string[] | null,
}

export interface PizzaProductSizeInterface {
    title: string,
    variants: PizzaProductCrustInterface[]
}

export interface SearchResultInterface {
    category: number,
    defaultPrice: number,
    id: number,
    imageUrl: string,
    rating: number, 
    title: string,
    variants: PizzaProductSizeInterface[],
    ingridients: IIngridients[]
}


export interface PizzaIngridientInterface {
    id: number,
    qty: number
}

export interface CartItemInterface {
    fulltitle: string,
    id: number,
    imageUrl: string,
    inSell: boolean,
    ingridients: PizzaIngridientInterface[],
    price: number,
    qty: number,
    title: string,
    uniqueId?: string
}

export interface IPizzaCategory {
    id: number,
    title: string
}

export interface CategoryInterface {
    id: number,
    title: string
}

export type SortVariantsType = {
    id: number,
    title: string
}

export interface IIngridientsFull {
    id: number,
    title: string,
    category: number,
    addPrice: number,
    imageUrl: string
}


export interface IIngridients {
    id: number,
    qty: number
}

export interface IPizza {
    id: number,
    imageUrl: string,
    title: string,
    ingridients: IIngridients[],
    variants: PizzaProductSizeInterface[],
    class: number,
    category: number,
    defaultObj?: IPizza
}

export interface IPizzaInCart {
    fulltitle: string,
    id: number,
    imageUrl: string,
    inSell: boolean,
    ingridients: IIngridients[],
    price: number,
    qty: number,
    title: string,
    uniqueId?: string
}

export interface IDrinkInCart {
    id: number,
    imageUrl: string,
    price: number,
    qty: number,
    size: string,
    uniqueId?: string
    title: string,
}

export interface ISideInCart {
    id: number,
    imageUrl: string,
    price: number,
    qty: number,
    size: string,
    title: string,
    uniqueId?: string
}

export  interface ISideCategory {
    id: number,
    title: string
}

export interface ISide {
    class: number,
    category: number,
    id: number,
    title: string,
    imageUrl: string,
    defaultPrice: number,
    variants: SideVariants[] 
}

export interface SideVariants {
    size: string,
    price: number
}

export interface IDrink {
    class: number,
    category: number,
    id: number,
    title: string,
    imageUrl: string,
    defaultPrice: number,
    variants: DrinkVariants[] 
}

export interface DrinkVariants {
    size: string,
    price: number
}

export interface IDrinkCategory {
    id: number,
    title: string
}

export interface IPaymentVariants {
    id: number,
    title: string
}

export interface IOrderObj {
    items: CartItemInterface[],
    totalItems: number,
    totalCost: number,
    customerData: {
        name: string,
        phone: string,
        email: string,
        orderType: number,
        street: string,
        house: string,
        room: string,
        floor: string,
        comment: string
    }
}


export interface IActionSetCategory {
    type: string,
    payload: number
}

export interface IActionChangeIngridientQty {
    type: string,
    payload: IPizza
}

export interface ISortReducer {
    category: number,
    sort: number
}

export interface ICartReducer {
    cart: ICart,
    paymentType: {
        id: number,
        title: string
    }
}