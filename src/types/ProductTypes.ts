//Pizza
import { SideVariants } from '../types';

export interface IPizzaCategory {
  _id: string;
  title: string;
  products: IPizzaMain[];
}

export interface IPizzaMain {
  _id: string;
  imageUrl: string;
  fullimageUrl: string;
  title: string;
  ingridients: IPizzaIngridientShort[];
  variants: IPizzaSize[];
  class: number;
  defaultPrice: number;
  rating?: number;
  category: string;
  defaultObj?: any;
  aNewOne?: boolean;
}

export interface IPizzaSize {
  title: string;
  variants: IPizzaCrust[];
  _id: string;
  size?: undefined;
  price?: number;
}

export interface IPizzaCrust {
  fulltitle: string;
  inSell: boolean;
  price: number;
  title: string;
  id?: number;
  _id: string;
}

export interface IPizzaIngridientShort {
  _id: string;
  ingridientId: IPizzaIngridientFull;
  qty: number;
}

export interface IPizzaIngridientFull {
  _id: string;
  title: string;
  addPrice: number;
  category: string;
  imageUrl: string;
}

export interface IIngridientsCategory {
  _id: string;
  title: string;
  ingridients: IPizzaIngridientFull[];
}

export type IProductSize = IPizzaSize[] | IDrinkSize[] | SideVariants[];
export type IProductVariant = IPizzaMain | ISideMain | IDrinkMain;

// drinks

export interface IDrinkMain {
  class: number;
  category: string;
  title: string;
  imageUrl: string;
  defaultPrice: number;
  aNewOne?: boolean;
  variants: IDrinkSize[];
  _id: string;
  rating: number;
  fullimageUrl?: string;
  ingridients?: undefined;
  defaultObj?: any;
}

export interface IDrinkSize {
  size: string;
  price: number;
  _id: string;
  variants: [];
  title?: undefined;
}

export interface ISideMain {
  _id: string;
  title: string;
  class: number;
  category: string;
  defaultPrice: number;
  imageUrl: string;
  variants: ISideSize[];
  ingridients?: undefined;
  fullimageUrl?: string;
  defaultObj?: any;
}

export interface ISideSize {
  size: string;
  price: number;
  _id: string;
  variants: [];
  title?: undefined;
}

export interface IProductActiveSize {
  size: number;
  crust: number;
}
