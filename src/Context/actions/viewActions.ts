import React from 'react';
import { SET_AUTH_MODAL_STATUS, SET_REFRESH_TOKEN_LOADING } from '../constans';

interface IActions {
  setAuthModalStatus: (status: 'active' | 'inactive') => void;
  setRefreshTokenLoader: (status: 'active' | 'inactive') => void;
}

export const getViewActions = (dispatch: React.Dispatch<any>): IActions => {
  const setAuthModalStatus = (status: 'active' | 'inactive'): void => {
    dispatch({ type: SET_AUTH_MODAL_STATUS, payload: status });
  };

  const setRefreshTokenLoader = (status: 'active' | 'inactive'): void => {
    dispatch({ type: SET_REFRESH_TOKEN_LOADING, payload: status });
  };

  return {
    setAuthModalStatus,
    setRefreshTokenLoader,
  };
};
