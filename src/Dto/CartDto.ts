import { CartItemInterface, ICart, ICustomerData, IIngridients } from "../types";
import { v4 as uuidv4 } from 'uuid';


export class CustomerDataDto {
    name: string | undefined;
    phone: string | undefined;
    email: string | undefined;
    orderType: number | undefined;
    street: string | undefined;
    house: string | undefined;
    room: string | undefined;
    floor: string | undefined;
    comment: string | undefined;

    constructor(customerData: ICustomerData) {
        this.name = customerData.name;
        this.phone = customerData.phone;
        this.email = customerData.email;
        this.orderType = customerData.orderType;
        this.street = customerData.street;
        this.house = customerData.house;
        this.room = customerData.room;
        this.floor = customerData.floor;
        this.comment = customerData.comment;
    }
}

export class NewOrderDto {
    items: CartItemInterface[] | undefined;
    totalItems: number | undefined;
    totalCost: number | undefined;
    customerData: ICustomerData | undefined;

    constructor(cart: ICart,customerData: ICustomerData) {
        this.items = cart.items;
        this.totalCost = cart.totalCost;
        this.totalItems = cart.totalItems;
        this.customerData = customerData;
    }
}


export function newOrderDto(cart: ICart,customerData: ICustomerData) {
    if (customerData.orderType === 0) {
        return {
            ...cart,
            customerData: new CustomerDataDto(customerData)
        }
    } else {
        return {}
    }
}


export class CartProductDTO {
    productClass: number | undefined;
    imageUrl: string | undefined;
    qty: number | undefined;
    title: string | undefined;
    ingridients: IIngridients[] | undefined;
    uniqueId: string | undefined;
    fulltitle: string | undefined;
    price: number | undefined;
    id:  number | undefined;
    inSell: boolean | undefined;
    size: string | undefined;

    constructor(productClass: number,imageUrl: string,fulltitle: string,title: string,price: number,ingridients: IIngridients[] | undefined,id: number,inSell: boolean,size: string | undefined) {
        this.productClass = productClass;
        this.uniqueId = uuidv4();
        this.imageUrl = imageUrl;
        this.qty = 1;
        this.title = title;
        this.fulltitle = fulltitle;
        this.price = price;
        this.id = id;
        this.inSell = inSell;
        this.ingridients = ingridients;
        this.size = size;
    }
}
