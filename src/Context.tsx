import React from 'react'
import { CartItemInterface } from './types'

const initialState:initialStateType = {
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
    }
}

type Action =
 | { type: 'ADD' }

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