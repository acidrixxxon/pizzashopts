import React from 'react';
import { IIngridient } from '../../types';
import { IPizza } from '../../types/ProductTypes';
import { SET_PRODUCT_DETAILS } from '../constans';

interface IActions {
  setProductDetails: (product: IPizza) => void;
  addIngridientToPizza: (ingridient: IIngridient) => void;
  changeIngridientQty: (type: string, ingridient: IIngridient) => void;
}

export const getProductDetailsActions = (dispatch: React.Dispatch<any>): IActions => {
  const setProductDetails = (product: IPizza): void => {
    dispatch({ type: SET_PRODUCT_DETAILS, payload: product });
  };

  const addIngridientToPizza = (ingridient: IIngridient): void => {
    // const prod: IIngridientsFull | undefined = ingridientsList.find(item => item.id === ingridient.id)
    // const isDefault = state.productDetails.defaultObj?.ingridients.find(item => item.id === ingridient.id)
    // if (prod && state.productDetails.defaultObj !== undefined) {
    //     if(isDefault) {
    //         dispatch({ type: ADD_INGRIDIENT_TO_PIZZA,payload: {
    //             variants: state.productDetails.defaultObj.variants,
    //             ingridients: [...state.productDetails.ingridients,ingridient]
    //         }})
    //     } else {
    //         dispatch({ type: ADD_INGRIDIENT_TO_PIZZA,payload: {
    //                 variants: state.productDetails.variants.map(size => {
    //                     return {
    //                         ...size,
    //                         variants: size.variants.map(crest => {
    //                             return {
    //                                 ...crest,
    //                                 price: crest.price + prod.addPrice
    //                             }
    //                         })
    //                     }
    //                 }),
    //                 ingridients: [...state.productDetails.ingridients,ingridient]
    //             }
    //         })
    //     }
    // }
  };

  const changeIngridientQty = (type: string, ingridient: IIngridient): void => {
    // let productDetailsObj:IPizza = state.productDetails
    // const ingridientIndex = productDetailsObj.ingridients.findIndex(item => item.id === ingridient.id)
    // let ingridientObj: IIngridients = productDetailsObj.ingridients[ingridientIndex]
    // let ingridientsArray: IIngridients[] = productDetailsObj.ingridients
    // if (type === 'plus') {
    //     if (ingridientObj.qty < 2) {
    //         ingridientObj.qty += 1
    //         ingridientsArray[ingridientIndex] = ingridientObj
    //         const newVariants = productDetailsObj.variants.map(size => {
    //             return {
    //                 ...size,
    //                 variants: size.variants.map(crest => {
    //                     return {
    //                         ...crest,
    //                         price: crest.price + ingridient.addPrice
    //                     }
    //                 })
    //             }
    //         })
    //         productDetailsObj.variants = newVariants
    //         productDetailsObj.ingridients = ingridientsArray
    //         dispatch({type: CHANGE_INGRIDIENT_QTY,payload: productDetailsObj})
    //     } else {
    //         return
    //     }
    // } else {
    //     if (ingridientObj.qty === 1) {
    //         const isDefault = state.productDetails.defaultObj?.ingridients.find(item => item.id === ingridient.id)
    //         if (isDefault) {
    //             productDetailsObj.ingridients = ingridientsArray.filter(item => item.id !== ingridient.id)
    //             dispatch({type:CHANGE_INGRIDIENT_QTY,payload: productDetailsObj})
    //         } else {
    //             productDetailsObj.ingridients = ingridientsArray.filter(item => item.id !== ingridient.id)
    //             productDetailsObj.variants = productDetailsObj.variants.map(size => {
    //                 return {
    //                     ...size,
    //                     variants: size.variants.map(crest => {
    //                         return {
    //                             ...crest,
    //                             price: crest.price - ingridient.addPrice
    //                         }
    //                     })
    //                 }
    //             })
    //             dispatch({type:CHANGE_INGRIDIENT_QTY,payload: productDetailsObj})
    //         }
    //     } else {
    //         ingridientObj.qty -= 1
    //         ingridientsArray[ingridientIndex] = ingridientObj
    //         const newVariants = productDetailsObj.variants.map(size => {
    //             return {
    //                 ...size,
    //                 variants: size.variants.map(crest => {
    //                     return {
    //                         ...crest,
    //                         price: crest.price - ingridient.addPrice
    //                     }
    //                 })
    //             }
    //         })
    //         productDetailsObj.variants = newVariants
    //         productDetailsObj.ingridients = ingridientsArray
    //         dispatch({type:CHANGE_INGRIDIENT_QTY,payload: productDetailsObj})
    //     }
    // }
  };

  return {
    setProductDetails,
    addIngridientToPizza,
    changeIngridientQty,
  };
};
