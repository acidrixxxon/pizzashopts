import React from 'react'
import { CartItemInterface } from './types'

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

    return (
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}
export { AppProvider,Context }