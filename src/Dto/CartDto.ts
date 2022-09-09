import { CartItemInterface, ICart, ICustomerData } from "../types";



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




// name: customerData.name,
// phone: customerData.phone,
// email: customerData.email,
// orderType: customerData.orderType,
// street: customerData.street,
// house: customerData.house,
// room: customerData.room,
// floor: customerData.floor,
// comment: customerData.comment