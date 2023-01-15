import React from 'react';

import { IPizzaIngridientFull, IPizzaIngridientShort, IProductVariant } from '../../types/ProductTypes';
import {
  SEARCH_RESULT_ADD_INGRIDIENT,
  SET_AUTH_MODAL_STATUS,
  SET_REFRESH_TOKEN_LOADING,
  SET_SEARCH_RESULT_MODAL_DATA,
  SET_SEARCH_RESULT_MODAL_VISIBILITY,
  TOGGLE_MOBILE_NAV_VISIBILITY,
} from '../constans';
import { IView } from '../context_types';

interface IActions {
  setAuthModalStatus: (status: 'active' | 'inactive') => void;
  setRefreshTokenLoader: (status: 'active' | 'inactive') => void;
  setSearchResultModalData: (data: IProductVariant | null) => void;
  setSearchResultModalVisibility: (status: 'hidden' | 'visible') => void;
  searchResultAddIngridient: (ingridient: IPizzaIngridientFull) => void;
  searchResultRemoveIngridient: (ingridient: IPizzaIngridientShort) => void;
  toggleMobileNavVisibility: (status: string) => void;
}

export const getViewActions = (dispatch: React.Dispatch<any>, state?: IView): IActions => {
  const setAuthModalStatus = (status: 'active' | 'inactive'): void => {
    dispatch({ type: SET_AUTH_MODAL_STATUS, payload: status });
  };

  const setRefreshTokenLoader = (status: 'active' | 'inactive'): void => {
    dispatch({ type: SET_REFRESH_TOKEN_LOADING, payload: status });
  };

  const setSearchResultModalData = (data: IProductVariant | null): void => {
    dispatch({ type: SET_SEARCH_RESULT_MODAL_DATA, payload: data });
  };

  const setSearchResultModalVisibility = (status: 'hidden' | 'visible'): void => {
    dispatch({ type: SET_SEARCH_RESULT_MODAL_VISIBILITY, payload: status });
  };

  const searchResultAddIngridient = (ingridient: IPizzaIngridientFull): void => {
    const souseCategoryId = '636f4d444ea5314e1da77912';

    if (state) {
      const ingridientObj = {
        _id: ingridient._id,
        ingridientId: ingridient,
        qty: 1,
      };

      //if ingridient is souse
      if (ingridient.category === souseCategoryId) {
        if (state.search.searchResultModal.data?.ingridients?.find((item) => item.ingridientId.category === souseCategoryId)) {
          //if pizza already has a souse
          let product = {
            ...state.search.searchResultModal.data,
            ingridients: state.search.searchResultModal.data.ingridients.filter(
              (item) => item.ingridientId.category !== souseCategoryId,
            ),
          };
          console.log(product);
          product.ingridients.push(ingridientObj);
          console.log(product);
          return dispatch({ type: SEARCH_RESULT_ADD_INGRIDIENT, payload: product });
        }
      }
      const product = {
        ...state.search.searchResultModal.data,
        variants: state.search.searchResultModal.data?.variants.map((size) => ({
          ...size,
          variants: size.variants.map((crust) => ({
            ...crust,
            price: crust.price + ingridientObj.ingridientId.addPrice,
          })),
        })),
        ingridients:
          state.search.searchResultModal.data && state.search.searchResultModal.data.ingridients
            ? [...state.search.searchResultModal.data.ingridients, ingridientObj]
            : [],
      };

      dispatch({ type: SEARCH_RESULT_ADD_INGRIDIENT, payload: product });
    }
  };

  const searchResultRemoveIngridient = (ingridient: IPizzaIngridientShort): void => {
    if (state) {
      const product = {
        ...state.search.searchResultModal.data,
        variants: state.search.searchResultModal.data?.variants.map((size) => ({
          ...size,
          variants: size.variants.map((crust) => ({
            ...crust,
            price: crust.price - ingridient.qty * ingridient.ingridientId.addPrice,
          })),
        })),
        ingridients:
          state.search.searchResultModal.data &&
          state.search.searchResultModal.data.ingridients &&
          state.search.searchResultModal.data.ingridients.filter((item) => item.ingridientId._id !== ingridient.ingridientId._id),
      };

      dispatch({ type: SEARCH_RESULT_ADD_INGRIDIENT, payload: product });
    }
  };

  const toggleMobileNavVisibility = (status: string): void => {
    dispatch({ type: TOGGLE_MOBILE_NAV_VISIBILITY, payload: status });
  };

  return {
    setAuthModalStatus,
    setRefreshTokenLoader,
    setSearchResultModalData,
    setSearchResultModalVisibility,
    searchResultAddIngridient,
    searchResultRemoveIngridient,
    toggleMobileNavVisibility,
  };
};
