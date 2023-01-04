import React from 'react';

import { IPizzaIngridientShort, IPizzaMain } from '../../types/ProductTypes';
import { ADD_INGRIDIENT_TO_PIZZA, CHANGE_INGRIDIENT_QTY, SET_PRODUCT_DETAILS } from '../constans';
import { IInitialState } from '../context_types';

interface IActions {
  setProductDetails: (product: IPizzaMain) => void;
  addIngridientToPizza: (ingridient: IPizzaIngridientShort) => void;
  changeIngridientQty: (type: 'plus' | 'minus', ingridient: IPizzaIngridientShort) => void;
}

export const getProductDetailsActions = (dispatch: React.Dispatch<any>, state?: IInitialState): IActions => {
  const setProductDetails = (product: IPizzaMain): void => {
    dispatch({ type: SET_PRODUCT_DETAILS, payload: product });
  };

  const addIngridientToPizza = (ingridient: IPizzaIngridientShort): void => {
    const isDefault = state?.productDetails.defaultObj?.ingridients.find((item: IPizzaIngridientShort) => item.ingridientId._id === ingridient._id);
    if (state && state.productDetails.defaultObj) {
      if (isDefault) {
        console.log('da');
        dispatch({
          type: ADD_INGRIDIENT_TO_PIZZA,
          payload: {
            variants: state.productDetails.defaultObj.variants,
            ingridients: [...state.productDetails.ingridients, ingridient],
          },
        });
      } else {
        dispatch({
          type: ADD_INGRIDIENT_TO_PIZZA,
          payload: {
            variants: state.productDetails.variants.map((size) => {
              return {
                ...size,
                variants: size.variants.map((crest) => {
                  return {
                    ...crest,
                    price: crest.price + ingridient.ingridientId.addPrice,
                  };
                }),
              };
            }),
            ingridients: [...state.productDetails.ingridients, ingridient],
          },
        });
      }
    }
  };

  const changeIngridientQty = (type: 'plus' | 'minus', ingridient: IPizzaIngridientShort): void => {
    if (state) {
      let productDetailsObj: IPizzaMain = state.productDetails;
      const ingridientIndex = productDetailsObj.ingridients.findIndex((item) => item.ingridientId._id === ingridient.ingridientId._id);
      let ingridientObj: IPizzaIngridientShort = productDetailsObj.ingridients[ingridientIndex];
      let ingridientsArray: IPizzaIngridientShort[] = productDetailsObj.ingridients;

      console.log(ingridientObj);
      console.log(ingridientIndex);

      if (type === 'plus') {
        if (ingridientObj.qty < 2) {
          ingridientObj.qty += 1;
          ingridientsArray[ingridientIndex] = ingridientObj;
          const newVariants = productDetailsObj.variants.map((size) => {
            return {
              ...size,
              variants: size.variants.map((crest) => {
                return {
                  ...crest,
                  price: crest.price + ingridient.ingridientId.addPrice,
                };
              }),
            };
          });
          productDetailsObj.variants = newVariants;
          productDetailsObj.ingridients = ingridientsArray;
          dispatch({ type: CHANGE_INGRIDIENT_QTY, payload: productDetailsObj });
        } else {
          return;
        }
      } else {
        if (ingridientObj.qty === 1) {
          const isDefault = state.productDetails.defaultObj?.ingridients.find(
            (item: IPizzaIngridientShort) => item.ingridientId._id === ingridient.ingridientId._id,
          );
          if (isDefault) {
            productDetailsObj.ingridients = ingridientsArray.filter((item) => item.ingridientId._id !== ingridient.ingridientId._id);

            dispatch({ type: CHANGE_INGRIDIENT_QTY, payload: productDetailsObj });
          } else {
            productDetailsObj.ingridients = ingridientsArray.filter((item) => item.ingridientId._id !== ingridient._id);
            productDetailsObj.variants = productDetailsObj.variants.map((size) => {
              return {
                ...size,
                variants: size.variants.map((crest) => {
                  return {
                    ...crest,
                    price: crest.price - ingridient.ingridientId.addPrice,
                  };
                }),
              };
            });

            dispatch({ type: CHANGE_INGRIDIENT_QTY, payload: productDetailsObj });
          }
        } else {
          ingridientObj.qty -= 1;
          ingridientsArray[ingridientIndex] = ingridientObj;
          const newVariants = productDetailsObj.variants.map((size) => {
            return {
              ...size,
              variants: size.variants.map((crest) => {
                return {
                  ...crest,
                  price: crest.price - ingridient.ingridientId.addPrice,
                };
              }),
            };
          });
          productDetailsObj.variants = newVariants;
          productDetailsObj.ingridients = ingridientsArray;
          dispatch({ type: CHANGE_INGRIDIENT_QTY, payload: productDetailsObj });
        }
      }
    }
  };

  return {
    setProductDetails,
    addIngridientToPizza,
    changeIngridientQty,
  };
};
