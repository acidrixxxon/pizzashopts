import { ADD_TO_CART, CHANGE_ITEM_QTY, CLEAR_CART, REMOVE_FROM_CART, TOGGLE_EXTRA_MOCARELLA, UPDATE_CART } from '../constans';
import { IAction, ICart } from '../context_types';

export const cartReducer = (state: ICart, action: IAction) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
        totalCost: state.totalCost + action.payload.price,
        totalItems: state.totalItems + action.payload.qty,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter((item) => item.uniqueId !== action.payload.uniqueId),
        totalCost: state.totalCost - action.payload.qty * action.payload.price,
        totalItems: state.totalCost - action.payload.qty,
      };
    case UPDATE_CART:
      return action.payload;
    case CHANGE_ITEM_QTY:
      return {
        ...state,
        items: action.payload.items,
        totalCost: action.payload.totalCost,
        totalItems: action.payload.totalItems,
      };
    case TOGGLE_EXTRA_MOCARELLA:
      return {
        ...state,
        items: action.payload.items,
        totalCost: action.payload.totalCost,
      };
    case CLEAR_CART:
      return {
        items: [],
        totalItems: 0,
        totalCost: 0,
      };
    default:
      return state;
  }
};
