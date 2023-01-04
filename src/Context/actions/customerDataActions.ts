import React from 'react';

import { IErrors, IPaymentVariants } from '../../types';
import { IUserFromServer } from '../../types/UserTypes';
import { INIT_CUSTOMER_DATA, SET_CUSTOMER_DATA, SET_FIELD_ERROR, SET_ORDER_TYPE, SET_PAYMENT_TYPE } from '../constans';

interface IActions {
  setCustomerData: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setFieldError: (errors: IErrors) => void;
  setPaymentType: (type: IPaymentVariants | null) => void;
  setOrderType: (type: number) => void;
  setInitialCustomerData: (data: IUserFromServer) => void;
}

export const getCustomerDataActions = (dispatch: React.Dispatch<any>): IActions => {
  const setCustomerData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    dispatch({ type: SET_CUSTOMER_DATA, payload: e });
  };

  const setPaymentType = (type: IPaymentVariants | null): void => {
    dispatch({ type: SET_PAYMENT_TYPE, payload: type });
  };

  const setOrderType = (type: number): void => {
    dispatch({ type: SET_ORDER_TYPE, payload: type });
  };

  const setFieldError = (errors: IErrors): void => {
    dispatch({ type: SET_FIELD_ERROR, payload: errors });
  };

  const setInitialCustomerData = (data: IUserFromServer): void => {
    dispatch({ type: INIT_CUSTOMER_DATA, payload: data });
  };

  return {
    setFieldError,
    setCustomerData,
    setPaymentType,
    setOrderType,
    setInitialCustomerData,
  };
};
