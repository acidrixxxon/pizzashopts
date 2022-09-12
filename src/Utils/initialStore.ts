import { ICart, ICustomerData, IErrors, IPizza } from "../types";


export const initialCustomerDataErrors: IErrors = {
    name: null,
    phone: null,
    email: null,
    street: null,
    house: null,
    paymentType: null
}

export const initialCustomerData: ICustomerData = {
    name: '',
    phone: '',
    email: '',
    street: '',
    house: '',
    room: '',
    floor: '',
    comment: '',
    orderType: 0,
    shop: 0,
    errors: initialCustomerDataErrors
}

export const initialCartState: ICart = {
    totalItems: 0,
    totalCost: 0,
    items: []
}

export const initialProductDetails: IPizza = {
    category: 0,
    id: 0,
    imageUrl: '',
    ingridients: [],
    title: '',
    class: 0,
    variants: [],
}