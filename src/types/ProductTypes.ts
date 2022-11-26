//Pizza

export interface IPizza {
  _id: string,
  imageUrl: string,
  fullimageUrl: string,
  title: string,
  ingridients: IPizzaIngridientShort[],
  variants: IPizzaSize[],
  class: number,
  category: string,
  defaultObj?: IPizza
}

export interface IPizzaSize {
  title: string,
  variants: IPizzaCrust[],
  _id: string
}

export interface IPizzaCrust {
  fulltitle: string,
  isSell:boolean,
  price: number,
  title: string,
  id?: number,
  _id: string
}

export interface IPizzaIngridientShort {
  _id: string,
  ingridientId: IPizzaIngridientFull,
  qty: number
}

export interface IPizzaIngridientFull {
  _id: string,
  title: string,
  addPrice: number,
  category: string,
  imageUrl: string
}

