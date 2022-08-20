
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
}