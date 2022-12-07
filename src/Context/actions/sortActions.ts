import React from 'react';
import { SET_CATEGORY, SET_SORT } from '../constans';

interface IActions {
  setCategory: (id: number) => void;
  setSort: (id: number) => void;
}

export const getSortActions = (dispatch: React.Dispatch<any>): IActions => {
  const setCategory = (id: number): void => {
    dispatch({ type: SET_CATEGORY, payload: id });
  };

  const setSort = (id: number): void => {
    dispatch({ type: SET_SORT, payload: id });
  };

  return {
    setCategory,
    setSort,
  };
};
