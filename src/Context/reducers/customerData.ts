import { ICustomerData } from '../../types';
import { INIT_CUSTOMER_DATA, SET_CUSTOMER_DATA, SET_FIELD_ERROR, SET_ORDER_TYPE, SET_PAYMENT_TYPE } from '../constans';
import { IAction } from '../context_types';

export const customerDataReducer = (state: ICustomerData, action: IAction) => {
  switch (action.type) {
    case INIT_CUSTOMER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case SET_CUSTOMER_DATA:
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value,
      };
    case SET_PAYMENT_TYPE:
      return {
        ...state,
        paymentType: action.payload,
      };
    case SET_ORDER_TYPE:
      return {
        ...state,
        orderType: action.payload,
      };
    case SET_FIELD_ERROR:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
