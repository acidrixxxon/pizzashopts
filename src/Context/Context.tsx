import React from 'react'
import { act } from 'react-dom/test-utils'

const initialState:IInitialState = {
    sort: {
        sort: 0,
        category: 0
    },
    cart: {
        items: [],
        totalCost: 0,
        totalItems: 0
    }
}


const Context1 = React.createContext<{state: IInitialState,dispatch: React.Dispatch<any>}>({state: initialState,dispatch: () => null})

const cartReducer = (state: ICart,action: IAction) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                items: ['1']
            }
        default:
            return state
    }
}

const sortReducer = (state: ISort,action: IAction) => {
    switch(action.type){
        case 'SET_SORT':
            return {
                ...state,
                sort: 1
            }
        default: 
            return state
    }
}

const rootReducer = (state: IInitialState,action: IAction) => ({
    cart: cartReducer(state.cart,action),
    sort: sortReducer(state.sort,action)
})

const StateProvider:React.FC<IProvider> = ({ children }) => {
    const [ state,dispatch ] = React.useReducer(rootReducer,initialState)
    return (
        <Context1.Provider value={{state,dispatch}}>
            {children}
        </Context1.Provider>
    )
}

export { StateProvider,Context1}

type IAction =
    | { type: 'ADD'}
    | { type: 'SET_SORT'}

interface IInitialState {
    sort: ISort,
    cart: ICart
}

interface ISort {
    sort: number,
    category: number
}

interface ICart {
    items: string[],
    totalCost: number,
    totalItems: number
}

interface IProvider {
    children: React.ReactNode
}