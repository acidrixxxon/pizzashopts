import { ICart, ICustomerData } from "../types";



// export default class CustomerDataDto {

//     constructor(customerData: ICustomerData) {
//         this.name: customerData.name;
//     }
// }

export function customerDataDto(customerData: ICustomerData):ICustomerData {
    return {
        name: customerData.name,
        phone: customerData.phone,
        email: customerData.email,
        orderType: customerData.orderType,
        street: customerData.street,
        house: customerData.house,
        room: customerData.room,
        floor: customerData.floor,
        comment: customerData.comment
    }
}

export function newOrderDto(cart: ICart,customerData: ICustomerData) {
    if (customerData.orderType === 0) {
        return {
            ...cart,
            customerData: {
                name: customerData.name,
                phone: customerData.phone,
                email: customerData.email,
                orderType: customerData.orderType,
                street: customerData.street,
                house: customerData.house,
                room: customerData.room,
                floor: customerData.floor,
                comment: customerData.comment
            }
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