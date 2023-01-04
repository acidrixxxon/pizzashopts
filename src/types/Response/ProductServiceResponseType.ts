import { IIngridientsCategory, IPizzaIngridientShort, IPizzaMain } from '../ProductTypes';

export interface IProductPageResponseSuccess {
  success: true;
  message: string;
  pizza: IPizzaMain;
}

export interface IProductPageResponseError {
  success: false;
  message: string;
  pizza?: null;
}

export type IProductPageResponse = IProductPageResponseSuccess | IProductPageResponseError;

export interface IGetAllIngridientsResponseSuccess {
  success: true;
  message: string;
  ingridients: IIngridientsCategory[];
}

export interface IGetAllIngridientsResponseError {
  success: false;
  message: string;
}

export type IGetAllIngridientsResponse = IGetAllIngridientsResponseSuccess | IGetAllIngridientsResponseError;
