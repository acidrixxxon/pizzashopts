import { ICart, ICustomerData } from './../types'


class LocalStorageService {

    saveCustomerData(customerData: ICustomerData,paymentType: {id: number,title: string} | null): void {
        localStorage.setItem('customer',JSON.stringify(customerData))
    }

    saveCartUpdate(cart: ICart):void {
        localStorage.setItem('cart',JSON.stringify(cart))
    }

    getCartFromStorage():void {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : null
    }

    getCustomerData(): ICustomerData | null {
        return localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer') || '{}') : null
    }
}


export default new LocalStorageService()