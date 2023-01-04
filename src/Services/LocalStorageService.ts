import { ICart } from '../Context/context_types';

import { ICustomerData } from './../types';

class LocalStorageService {
  saveCustomerData(customerData: ICustomerData): void {
    localStorage.setItem('customer', JSON.stringify(customerData));
  }

  saveCartUpdate(cart: ICart): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartFromStorage(): void {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : null;
  }

  removeCartFromStorage(): void {
    localStorage.removeItem('cart');
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

  removeAccessToken(): void {
    localStorage.removeItem('accessToken');
  }
}

export default new LocalStorageService();
