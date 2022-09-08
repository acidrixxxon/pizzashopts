import React from 'react'
import { act } from 'react-dom/test-utils'
import { ingridientsList } from './mockdata'
import { Action, IActions, IDrinkInCart, IIngridients, IIngridientsFull, initialStateType, IPaymentVariants, IPizza, IPizzaInCart, ISideInCart } from './types'

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
    paymentType: null,
    productDetails: {
        category: 0,
        id: 0,
        imageUrl: '',
        ingridients: [],
        title: '',
        class: 0,
        variants: [],
    }
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
                const sameIngridients = action.payload.ingridients.find((item,index) => {
                    if (action.payload.ingridients.length !== alreadyInCart.ingridients.length) return false
                    if (item.id === alreadyInCart.ingridients[index].id) {
                      if (item.qty === alreadyInCart.ingridients[index].qty) {
                        return true
                      }
                    }
                    return false
                  })
                  console.log(sameIngridients)
                if (sameIngridients !== undefined) {
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
        case 'SET_PAYMENT_TYPE':
            return {
                ...state,
                paymentType: action.payload
            }
        case 'SET_PRODUCT_DETAILS':
            return {
                ...state,
                productDetails: action.payload
            }
        case 'ADD_INGRIDIENT_TO_PIZZA':
            return {
                ...state,
                productDetails: {
                    ...state.productDetails,
                    ingridients: action.payload.ingridients,
                    variants: action.payload.variants
                }
            }
        case 'SET_INGRIDIENT_QTY':
            return {
                ...state,
                productDetails: action.payload
            }
            
        default:
            return state
    }
}



const Context = React.createContext<{state: initialStateType,dispatch: React.Dispatch<any>,actions:any}>({state: initialState,dispatch: () => null,actions: null})

const AppProvider: React.FC<{children: JSX.Element}> = ({ children }) => {
    const [ state,dispatch ] = React.useReducer(mainReducer,initialState)

    const setCategory = (id: number):void => {
        return dispatch({
            type: 'SET_CATEGORY',
            payload: id
        })
    }

    const setSortType = (id: number):void => {
        return dispatch({
            type: 'SET_SORT',
            payload: id
        })
    }

    const setPaymentType = (type: IPaymentVariants): void => {
        dispatch({type: 'SET_PAYMENT_TYPE',payload: type})
    }

    const clearCart = ():void => {
        dispatch({type: 'CLEAR_CART'})
    }

    const addIngridient = (ingridient: IIngridients):void => {
        const prod: IIngridientsFull | undefined = ingridientsList.find(item => item.id === ingridient.id)
        let productDetailsObj:IPizza = state.productDetails
        productDetailsObj.ingridients.push(ingridient)   
        
        if (prod) {
            const newVariants = productDetailsObj.variants.map(size => {
                return {
                    ...size,
                    variants: size.variants.map(crest => {
                        return {
                            ...crest,
                            price: crest.price + prod.addPrice
                        }
                    })
                }
            })

            const data = {
                ingridients: productDetailsObj.ingridients,
                variants: newVariants
            }

            dispatch({type: 'ADD_INGRIDIENT_TO_PIZZA',payload: data})
        }
    }

    const changeIngridientQty = (type: string,ingridient: IIngridientsFull):void => {
        let productDetailsObj:IPizza = state.productDetails
        const ingridientIndex = productDetailsObj.ingridients.findIndex(item => item.id === ingridient.id)
        let ingridientObj: IIngridients = productDetailsObj.ingridients[ingridientIndex]
        let ingridientsArray: IIngridients[] = productDetailsObj.ingridients

        if (type === 'plus') {
            if (ingridientObj.qty < 2) {
                ingridientObj.qty += 1
                ingridientsArray[ingridientIndex] = ingridientObj

                const newVariants = productDetailsObj.variants.map(size => {
                    return {
                        ...size,
                        variants: size.variants.map(crest => {
                            return {
                                ...crest,
                                price: crest.price + ingridient.addPrice
                            }
                        })
                    }
                })

                productDetailsObj.variants = newVariants
                productDetailsObj.ingridients = ingridientsArray

                dispatch({type:'SET_INGRIDIENT_QTY',payload: productDetailsObj})
            } else {
                return 
            }
        } else {
            if (ingridientObj.qty === 1) {
                productDetailsObj.ingridients = ingridientsArray.filter(item => item.id !== ingridient.id)
                dispatch({type:'SET_INGRIDIENT_QTY',payload: productDetailsObj})
            } else {
                ingridientObj.qty -= 1
                ingridientsArray[ingridientIndex] = ingridientObj

                const newVariants = productDetailsObj.variants.map(size => {
                    return {
                        ...size,
                        variants: size.variants.map(crest => {
                            return {
                                ...crest,
                                price: crest.price - ingridient.addPrice
                            }
                        })
                    }
                })

                productDetailsObj.variants = newVariants
                productDetailsObj.ingridients = ingridientsArray

                dispatch({type:'SET_INGRIDIENT_QTY',payload: productDetailsObj})
            } 
        }
    }
    
    const actions:IActions = {
        setCategory,
        changeIngridientQty,
        setSortType,
        addIngridient,
        setPaymentType,
        clearCart
    }

    return (
        <Context.Provider value={{state,dispatch,actions}}>
            {children}
        </Context.Provider>
    )
}
export { AppProvider,Context }