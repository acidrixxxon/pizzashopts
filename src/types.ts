
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
    variants: PizzaProductSizeInterface[]
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


export interface CategoryInterface {
    id: number,
    title: string
}

export type SortVariantsType = {
    id: number,
    title: string
}