import React, { ReducerWithoutAction } from 'react'
import { ingridientsList } from './mockdata'
import { Action, IActions, IDrinkInCart, IErrors, IIngridients, IIngridientsFull, initialStateType, IPaymentVariants, IPizza, IPizzaInCart, ISideInCart, ICart, ISortReducer, ICartReducer } from './types'
import { initialCartState, initialCustomerData, initialProductDetails } from './Utils/initialStore'

const initialState:initialStateType = {
    category: 0,
    sort: 0,
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : initialCartState,
    customerData: localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer') || '{}') : initialCustomerData,
    paymentType: null,
    productDetails: initialProductDetails
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
        case 'SET_FIELD_ERROR':
            return {
                ...state,
                customerData: {
                    ...state.customerData,
                    errors: action.payload
                }
            }
        case 'ADD_DOUBLE_MOCARELLA':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    totalCost: action.payload.totalCost,
                    items: action.payload.items
                }
            }
        case 'REMOVE_DOUBLE_MOCARELLA':
            return {
                ...state,
                cart: {
                    ...state.cart,
                    totalCost: action.payload.totalCost,
                    items: action.payload.items
                }
            }
        default:
            return state
    }
}


// const sortReducer = (state: ISortReducer,action: Action): ISortReducer => {
//     switch(action.type) {
//         default:
//             return state
//     }
// }

// const cartReducer = (state: ICartReducer,action: Action): ICartReducer => {
//     switch(action.type) {
//         default:
//             return state
//     }
// }
// const rootReducer = ({cart,sort,category,paymentType}:{cart: ICart,sort: number,category: number,paymentType: {id: number,title: string}},action: Action): any => ({
//     sort: sortReducer({sort,category},action),
//     cart: cartReducer({cart,paymentType} ,action)
// })



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

    const setFieldError = (errors: IErrors):void => {
        dispatch({type: 'SET_FIELD_ERROR',payload: errors})
    }

    const setCustomerData = (e: React.ChangeEvent<HTMLInputElement>):void => {
        dispatch({type: 'SET_CUSTOMER_DATA',payload: e})
    }

    const addDoubleMocarella = (id: string):void => {
        let obj = state.cart.items.find(item => item.uniqueId === id)
        const objIndex = state.cart.items.findIndex(item => item.uniqueId === id)
        const mocarela = ingridientsList.find(item => item.id === 15)

        let itemsArr = state.cart.items
        if (obj !== undefined && objIndex  !== undefined) {
            const ingridientIndex = obj.ingridients.findIndex(item => item.id === 15)
            
            obj.ingridients[ingridientIndex].qty += 1
           
            if (mocarela) {
                obj.price += mocarela.addPrice
                console.log(obj)
                itemsArr[objIndex] = obj
                dispatch({ type: 'ADD_DOUBLE_MOCARELLA',payload: {items: itemsArr,totalCost: state.cart.totalCost + (mocarela?.addPrice * obj.qty)}})
            }
        }
    }

    const removeDoubleMocarella = (id: string):void => {
        let obj = state.cart.items.find(item => item.uniqueId === id)
        const objIndex = state.cart.items.findIndex(item => item.uniqueId === id)
        const mocarela = ingridientsList.find(item => item.id === 15)

        let itemsArr = state.cart.items
        if (obj !== undefined && objIndex  !== undefined) {
            const ingridientIndex = obj.ingridients.findIndex(item => item.id === 15)
            
            obj.ingridients[ingridientIndex].qty -= 1
           
            if (mocarela) {
                obj.price -= mocarela.addPrice
                itemsArr[objIndex] = obj
                dispatch({ type: 'REMOVE_DOUBLE_MOCARELLA',payload: {items: itemsArr,totalCost: state.cart.totalCost - (mocarela?.addPrice * obj.qty)}})
                console.log(state)
            }
        }
    }
    
    const actions:IActions = {
        setCategory,
        changeIngridientQty,
        setSortType,
        addIngridient,
        setPaymentType,
        clearCart,
        setFieldError,
        setCustomerData,
        addDoubleMocarella,
        removeDoubleMocarella
    }

    return (
        <Context.Provider value={{state,dispatch,actions}}>
            {children}
        </Context.Provider>
    )
}
export { AppProvider,Context }