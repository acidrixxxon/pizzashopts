import { isEqual } from 'lodash';

import { IDrinkInCart, IPizzaInCart, ISideInCart } from '../../types';
import { IOrderCart } from '../../types/OrderTypes';
import { ADD_TO_CART, CHANGE_ITEM_QTY, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_EXTRA_MOCARELLA, UPDATE_CART } from '../constans';
import { IInitialState } from '../context_types';

interface IActions {
  addToCart: (item: IPizzaInCart | ISideInCart | IDrinkInCart) => void;
  removeFromCart: (item: IPizzaInCart | IDrinkInCart | ISideInCart) => void;
  changeItemQty: (type: string, id: string) => void;
  clearCart: () => void;
  reorderToCart: (cart: IOrderCart) => void;
  toggleExtraMocarella: (id: string, type: string) => void;
}

export const getCartActions = (dispatch: React.Dispatch<any>, state?: IInitialState): IActions => {
  const addToCart = (item: IPizzaInCart | ISideInCart | IDrinkInCart): void => {
    //перевіряємо чи є данний обьєкт у корзині
    const alreadyInCart = state && state?.cart.items.filter((product) => product._id === item._id);

    if (alreadyInCart && alreadyInCart.length > 0) {
      if (item.class === 0) {
        const compare = alreadyInCart.map((prod) => {
          if (isEqual(prod.ingridients, item.ingridients)) {
            return prod;
          } else {
            return;
          }
        });

        if (compare.filter((item) => typeof item === 'object')[0]) {
          console.log('sovpal sostav');
          const itemIndex = state?.cart.items.findIndex(
            (prod) => JSON.stringify(prod.ingridients) === JSON.stringify(item.ingridients) && prod._id === item._id,
          );
          const itemsArray = state.cart.items;
          const itemObj = state.cart.items[itemIndex];

          if (itemObj) {
            itemObj.qty = +1;
            itemsArray[itemIndex] = itemObj;

            const newCart = {
              items: itemsArray,
              totalCost: state.cart.totalCost + item.price,
              totalItems: state.cart.totalItems + 1,
            };

            dispatch({ type: UPDATE_CART, payload: newCart });
          }
        } else {
          console.log('ne sovpal sostav');
          dispatch({ type: ADD_TO_CART, payload: item });
        }
      } else {
        const itemIndex = state.cart.items.findIndex((item) => item._id === item._id);
        const itemsArray = state.cart.items;
        const itemObj = state.cart.items[itemIndex];

        if (itemObj) {
          itemObj.qty = itemObj.qty && itemObj.qty + 1;
          itemsArray[itemIndex] = itemObj;

          const newCart = {
            items: itemsArray,
            totalCost: state.cart.totalCost + item.price,
            totalItems: state.cart.totalItems + 1,
          };

          dispatch({ type: UPDATE_CART, payload: newCart });
        }
      }
    } else {
      dispatch({ type: ADD_TO_CART, payload: item });
    }
  };

  const removeFromCart = (item: IPizzaInCart | IDrinkInCart | ISideInCart): void => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };

  const changeItemQty = (type: string, id: string): void => {
    if (state) {
      const item = state.cart.items.find((item) => item.uniqueId === id);
      const itemIndex = state.cart.items.findIndex((item) => item.uniqueId === id);
      let array = state.cart.items;

      if (item && item.qty) {
        if (type === 'plus') {
          item.qty += 1;
          array[itemIndex] = item;

          const data = {
            items: array,
            totalCost: state.cart.totalCost + item.price,
            totalItems: state.cart.totalItems + 1,
          };

          dispatch({ type: CHANGE_ITEM_QTY, payload: data });
        } else {
          if (item.qty === 1) {
            array = array.filter((item) => item.uniqueId !== id);

            const data = {
              items: array,
              totalCost: state.cart.totalCost - item.price,
              totalItems: state.cart.totalItems - 1,
            };

            dispatch({ type: CHANGE_ITEM_QTY, payload: data });
          } else {
            item.qty -= 1;
            array[itemIndex] = item;

            const data = {
              items: array,
              totalCost: state.cart.totalCost - item.price,
              totalItems: state.cart.totalItems - 1,
            };

            dispatch({ type: CHANGE_ITEM_QTY, payload: data });
          }
        }
      }
    }
  };

  const clearCart = (): void => {
    dispatch({ type: CLEAR_CART });
  };

  const reorderToCart = (cart: IOrderCart): void => {
    dispatch({ type: CLEAR_CART });

    dispatch({ type: UPDATE_CART, payload: cart });
  };

  const toggleExtraMocarella = (id: string, type: string): void => {
    if (state) {
      const item = state.cart.items.find((item) => item.uniqueId === id);
      const itemIndex = state.cart.items.findIndex((item) => item.uniqueId === id);
      const mocarella = item?.ingridients?.find((item) => item.ingridientId._id === '63714ca4858cf7c6b09716fc');
      const array = state.cart.items;
      const ingridientIndex = item?.ingridients?.findIndex((item) => item.ingridientId._id === '63714ca4858cf7c6b09716fc');

      if (item && item !== undefined && itemIndex !== undefined && item.ingridients !== undefined && mocarella && ingridientIndex) {
        if (type === 'add') {
          item.ingridients[ingridientIndex].qty += 1;

          if (mocarella) {
            item.price += mocarella.ingridientId.addPrice;
            array[itemIndex] = item;
            dispatch({
              type: TOGGLE_EXTRA_MOCARELLA,
              payload: { items: array, totalCost: state.cart.totalCost + mocarella?.ingridientId.addPrice * item.qty },
            });
          }
        } else {
          item.ingridients[ingridientIndex].qty -= 1;

          if (mocarella) {
            item.price -= mocarella.ingridientId.addPrice;
            array[itemIndex] = item;
            dispatch({
              type: TOGGLE_EXTRA_MOCARELLA,
              payload: { items: array, totalCost: state.cart.totalCost - mocarella?.ingridientId.addPrice * item.qty },
            });
          }
        }
      }
    }
  };

  return {
    addToCart,
    changeItemQty,
    removeFromCart,
    clearCart,
    reorderToCart,
    toggleExtraMocarella,
  };
};
