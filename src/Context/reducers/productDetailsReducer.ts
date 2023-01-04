import { IPizzaMain } from '../../types/ProductTypes';
import { ADD_INGRIDIENT_TO_PIZZA, CHANGE_INGRIDIENT_QTY, SET_PRODUCT_DETAILS } from '../constans';
import { IAction } from '../context_types';

export const productDetailsReducer = (state: IPizzaMain, action: IAction) => {
  switch (action.type) {
    case SET_PRODUCT_DETAILS:
      return {
        ...action.payload,
        defaultObj: action.payload,
      };
    case ADD_INGRIDIENT_TO_PIZZA:
      return {
        ...state,
        ingridients: action.payload.ingridients,
        variants: action.payload.variants,
      };
    case CHANGE_INGRIDIENT_QTY:
      return action.payload;
    default:
      return state;
  }
};
