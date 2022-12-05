import { ICustomerData } from './../types';

import { ICart } from '../Context/context_types';

class LocalStorageService {
  saveCustomerData(customerData: ICustomerData, paymentType: { id: number; title: string } | null): void {
    localStorage.setItem('customer', JSON.stringify(customerData));
  }

  saveCartUpdate(cart: ICart): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartFromStorage(): void {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : null;
  }

  getCustomerData(): ICustomerData | null {
    return localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer') || '{}') : null;
  }

  saveAccessToken(token: string): void {
    localStorage.setItem('accessToken', JSON.stringify(token));
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken') !== null &&
      localStorage.getItem('accessToken') &&
      localStorage.getItem('accessToken') !== undefined
      ? JSON.parse(localStorage.getItem('accessToken') || '')
      : null;
  }
}

export default new LocalStorageService();
