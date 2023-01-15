// import { ICart, ICustomerData, IIngridients1 } from "../types";
// import { ICartItem } from '../Context/context_types'
import { v4 as uuidv4 } from 'uuid';

import { ICart } from '../Context/context_types';
import { ICustomerData, IDrinkInCart, IPizzaInCart, ISideInCart } from '../types';
import { IDrinkMain, IPizzaMain, ISideMain } from '../types/ProductTypes';

export function newOrderDto(cart: ICart, customerData: ICustomerData) {
  if (customerData.orderType === 0) {
    return {
      cart: {
        items: cart.totalCost < 300 ? [...cart.items, { title: 'Доставка', price: 40, id: 999 }] : [...cart.items],
        totalItems: cart.totalCost < 300 ? cart.totalItems + 1 : cart.totalItems,
        totalCost: cart.totalCost < 300 ? cart.totalCost + 40 : cart.totalCost,
      },
      details: {
        orderType: {
          title: 'Доставка',
          id: 0,
        },
        customerData: {
          email: customerData.email,
          phone: customerData.phone,
          name: customerData.name,
          street: customerData.street,
          house: customerData.house,
          floor: customerData.floor,
          room: customerData.room,
          comment: customerData.comment,
        },
        paymentType: customerData.paymentType,
      },
    };
  } else {
    return {
      ...cart,
      customerData: {
        email: customerData.email,
        phone: customerData.phone,
        name: customerData.name,
        city: customerData.city,
        restaurant: customerData.restaurant,
      },
      paymentType: customerData.paymentType,
    };
  }
}

export const getProductDto = (
  item: any,
  activeSize: number,
  activeType?: number,
): IPizzaInCart | IDrinkInCart | ISideInCart | null => {
  if (item)
    if (item.class === 0 && activeType) {
      return {
        _id: item.variants[activeSize].variants[activeType]._id,
        uniqueId: uuidv4(),
        imageUrl: item.imageUrl,
        fullimageUrl: item.fullimageUrl,
        class: item.class,
        title: item.title,
        fulltitle: item.variants[activeSize].variants[activeType].fulltitle,
        price: item.variants[activeSize].variants[activeType].price,
        ingridients: item.ingridients,
        qty: 1,
        isSell: item.variants[activeSize].variants[activeType].inSell,
      };
    } else if (item.class === 2) {
      return {
        _id: item.variants[activeSize]._id,
        uniqueId: uuidv4(),
        size: item.variants[activeSize].size,
        price: item.variants[activeSize].price,
        title: item.title,
        qty: 1,
        category: item.category,
        class: 2,
        imageUrl: item.imageUrl,
      };
    } else if (item.class === 1) {
      return {
        _id: item.variants[activeSize]._id,
        uniqueId: uuidv4(),
        class: 1,
        imageUrl: item.imageUrl,
        title: item.title,
        size: item.variants[activeSize].size,
        price: item.variants[activeSize].price,
        category: item.category,
        qty: 1,
      };
    }

  return null;
};
