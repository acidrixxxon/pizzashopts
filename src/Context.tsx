import React from 'react'
import { CartItemInterface, IPizzaInCart } from './types'

const initialState:initialStateType = {
    category: 0,
    sort: 0,
    cart: {
        totalItems: 0,
        totalCost: 0,
        items: []
    }
}

export type initialStateType = {
    cart: {
        totalItems: number,
        totalCost: number,
        items: CartItemInterface[]
    },
    category: number,
    sort: number,
}

type Action =
 | { type: 'ADD' }
 | { type: 'SET_CATEGORY',payload: number}
 | { type: 'SET_SORT',payload: number}
 | { type: 'ADD_TO_CART',payload: IPizzaInCart}

const mainReducer = (state: initialStateType,action: Action) => {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    totalItems: state.cart.totalItems + 1
                }
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload
            }
        case 'SET_SORT':
            return {
                ...state,
                sort: action.payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: [...state.cart.items,action.payload],
                    totalItems: state.cart.totalItems + action.payload.qty,
                    totalCost: state.cart.totalCost + action.payload.price
                }
            }
        default:
            return state
    }
}

type ProviderType = {
    children: JSX.Element
}

const Context = React.createContext<{state: initialStateType,dispatch: React.Dispatch<any>}>({state: initialState,dispatch: () => null})

const AppProvider: React.FC<ProviderType> = ({ children }) => {
    const [ state,dispatch ] = React.useReducer(mainReducer,initialState)

    const setCategory = (id: number)  => {
        return dispatch({
            type: 'SET_CATEGORY',
            payload: id
        })
    }
    console.log(state)
    return (
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}
export { AppProvider,Context }