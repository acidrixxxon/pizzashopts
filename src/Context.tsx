import React, { Dispatch } from 'react'
import { Action, CartItemInterface, IDrinkInCart, initialStateType, IPizzaInCart, ISideInCart } from './types'

const initialState:initialStateType = {
    category: 0,
    sort: 0,
    cart: {
        totalItems: 0,
        totalCost: 0,
        items: []
    },
    customerData: {
        name: '',
        phone: '',
        email: '',
        street: '',
        house: '',
        room: '',
        floor: '',
        comment: '',
        orderType: 0,
        shop: 0
    },
    paymentType: null
}


const mainReducer = (state: initialStateType,action: Action): initialStateType => {
    switch(action.type) {
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
            const alreadyInCart:IPizzaInCart | ISideInCart | IDrinkInCart | undefined = state.cart.items.find(item => item.id === action.payload.id)

            if (alreadyInCart) {
                const index = state.cart.items.findIndex(item => item.id === action.payload.id)
                let newItem = state.cart.items[index]
                newItem.qty += 1

                let newArray = state.cart.items
                newArray[index] = newItem

                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        items: newArray,
                        totalCost: state.cart.totalCost + newItem.price,
                        totalItems: state.cart.totalItems + 1
                    }
                }
            } else {
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        items: [...state.cart.items,action.payload],
                        totalItems: state.cart.totalItems + action.payload.qty,
                        totalCost: state.cart.totalCost + action.payload.price
                    }
                }
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: {
                    items: state.cart.items.filter(item => item.id !== action.payload.id),
                    totalCost: state.cart.totalCost - (action.payload.qty * action.payload.price),
                    totalItems: state.cart.totalItems - action.payload.qty    
                }
            }
        case 'PLUS_QTY':
            const itemIndex:number = state.cart.items.findIndex(item => item.id === action.payload)
            let newItem = state.cart.items[itemIndex]
            newItem.qty += 1

            let newArray = state.cart.items
            newArray[itemIndex] = newItem

            return {
                ...state,
                cart: {
                    ...state.cart,
                    items: newArray,
                    totalCost: state.cart.totalCost + newItem.price,
                    totalItems: state.cart.totalItems + 1
                }
            }
        case 'MINUS_QTY':
            const index:number = state.cart.items.findIndex(item => item.id === action.payload)
            let newObj = state.cart.items[index]

            if (newObj.qty > 1) {
                newObj.qty -= 1

                let newArr = state.cart.items
                newArr[index] = newObj
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        items: newArr,
                        totalCost: state.cart.totalCost - newObj.price,
                        totalItems: state.cart.totalItems - 1
                    }
                }
            } else {
                return {
                    ...state,
                    cart: {
                        items: state.cart.items.filter(item => item.id !== action.payload),
                        totalItems: state.cart.totalItems - 1,
                        totalCost: state.cart.totalCost - newObj.price
                    }
                }
            }
        case 'CLEAR_CART':
            return {
                ...state,
                cart: {
                    items: [],
                    totalItems: 0,
                    totalCost: 0
                }
            }
        case 'SET_CUSTOMER_DATA':
            return {
                ...state,
                customerData: {
                    ...state.customerData,
                    [action.payload.target.name]: action.payload.target.value
                }
            }
        default:
            return state
    }
}



const Context = React.createContext<{state: initialStateType,dispatch: React.Dispatch<any>}>({state: initialState,dispatch: () => null})

const AppProvider: React.FC<{children: JSX.Element}> = ({ children }) => {
    const [ state,dispatch ] = React.useReducer(mainReducer,initialState)

    const setCategory = (id: number)  => {
        return dispatch({
            type: 'SET_CATEGORY',
            payload: id
        })
    }
    
    const actions = {
        setCategory
    }

    return (
        <Context.Provider value={{state,dispatch}}>
            {children}
        </Context.Provider>
    )
}
export { AppProvider,Context }