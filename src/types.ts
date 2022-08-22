import { title } from "process"

interface PizzaProductCrustInterface {
    fulltitle: string,
    inSell: boolean,
    price: number,
    title: string,
    id: number
}

interface PizzaProductSizeInterface {
    title: string,
    variants: PizzaProductCrustInterface[]
}

export interface SearchResultInterface {
    category: number,
    defaultPrice: number,
    id: number,
    imageUrl: string,
    rating: number, 
    title: string,
    variants: PizzaProductSizeInterface[],
    ingridients: IIngridients[]
}


export interface PizzaIngridientInterface {
    id: number,
    qty: number
}

export interface CartItemInterface {
    fulltitle: string,
    id: number,
    imageUrl: string,
    inSell: boolean,
    ingridients: PizzaIngridientInterface[],
    price: number,
    qty: number,
    title: string
}

export interface IPizzaCategory {
    id: number,
    title: string
}

export interface CategoryInterface {
    id: number,
    title: string
}

export type SortVariantsType = {
    id: number,
    title: string
}

export interface IIngridientsFull {
    id: number,
    title: string,
    category: number,
    addPrice: number,
    imageUrl: string
}


export interface IIngridients {
    id: number,
    qty: number
}

export interface IPizza {
    id: number,
    imageUrl: string,
    title: string,
    ingridients: IIngridients[],
    variants: PizzaProductSizeInterface[],
    class: number,
    category: number
}

export interface IPizzaInCart {
    fulltitle: string,
    id: number,
    imageUrl: string,
    inSell: boolean,
    ingridients: IIngridients[],
    price: number,
    qty: number,
    title: string
}

export  interface ISideCategory {
    id: number,
    title: string
}

export interface ISide {
    class: number,
    category: number,
    id: number,
    title: string,
    imageUrl: string,
    defaultPrice: number,
    variants: SideVariants[] 
}

interface SideVariants {
    size: string,
    price: number
}

export interface IDrink {
    class: number,
    category: number,
    id: number,
    title: string,
    imageUrl: string,
    defaultPrice: number,
    variants: DrinkVariants[] 
}

interface DrinkVariants {
    size: string,
    price: number
}

export interface IDrinkCategory {
    id: number,
    title: string
}