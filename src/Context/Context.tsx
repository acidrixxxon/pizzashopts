import { isEqual } from 'lodash'
import React from 'react'
import { ingridientsList } from '../mockdata'
import { IDrinkInCart, IErrors, IIngridients, IIngridientsFull, IPizza, IPizzaInCart, ISideInCart } from '../types'
import { initialCartState, initialCustomerData, initialProductDetails } from '../Utils/initialStore'
import { ADD_INGRIDIENT_TO_PIZZA, ADD_TO_CART, CHANGE_INGRIDIENT_QTY, CHANGE_ITEM_QTY, CLEAR_CART, REMOVE_FROM_CART, SET_AUTH_MODAL_STATUS, SET_CATEGORY, SET_FIELD_ERROR, SET_PRODUCT_DETAILS, SET_SORT, TOGGLE_EXTRA_MOCARELLA, UPDATE_CART } from './constans'
import { IActionsList, ICartItem, IInitialState, IProvider } from './context_types'
import { rootReducer } from './reducers/rootReducer'

const initialState:IInitialState = {
    sort: {
        sort: 0,
        category: 0
    },
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart') || '{}') : initialCartState,
    customerData: localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer') || '{}') : initialCustomerData,
    productDetails: initialProductDetails,
    view: {
        authModal: {
            status: 'inactive'
        }
    }
}

interface ContextInterface {
    state: IInitialState,
    dispatch: React.Dispatch<any>,
    actions: any
}

const Context1 = React.createContext<ContextInterface>({state: initialState,dispatch: () => null,actions: null})


const StateProvider:React.FC<IProvider> = ({ children }) => {
    const [ state,dispatch ] = React.useReducer(rootReducer,initialState)

    const setCategory = (id: number): void => {
        dispatch({ type: SET_CATEGORY,payload: id})
    }

    const setSort = (id: number): void => {
        dispatch({ type: SET_SORT,payload: id})
    }

    const addToCart = (item: ICartItem): void => {
        const alreadyInCart = state.cart.items.filter(product => product.id === item.id)
        if (alreadyInCart.length > 0) {

            const compare = alreadyInCart.map(prod => {
                if (isEqual(prod.ingridients,item.ingridients)) {
                    return prod
                } else {
                    return 
                }
            })
            
            if (compare.filter(item => typeof item === 'object')[0]) {
                console.log('sovpal sostav')
                const itemIndex = state.cart.items.findIndex(prod => JSON.stringify(prod.ingridients) === JSON.stringify(item.ingridients) && prod.id === item.id)
                let itemsArray = state.cart.items
                let itemObj = state.cart.items[itemIndex]

                itemObj.qty += 1
                itemsArray[itemIndex] = itemObj

                const newCart = {
                    items: itemsArray,
                    totalCost: state.cart.totalCost + item.price,
                    totalItems: state.cart.totalItems + 1
                }

                dispatch({ type: UPDATE_CART,payload: newCart})
            } else {
                console.log('ne sovpal sostav')
                dispatch({ type: ADD_TO_CART,payload: item})
            }
        } else {
            dispatch({ type: ADD_TO_CART,payload: item})
        }
    }

    const removeFromCart = (item: IPizzaInCart | IDrinkInCart | ISideInCart): void => {
        dispatch({ type: REMOVE_FROM_CART,payload: item})
    }

    const changeItemQty = (type: string,id: string): void => {
        const item = state.cart.items.find(item => item.uniqueId === id)
        const itemIndex = state.cart.items.findIndex(item => item.uniqueId === id)
        let array = state.cart.items

        if(type === 'plus') {
            if(item) {
                item.qty += 1
                array[itemIndex] = item

                const data = {
                    items: array,
                    totalCost: state.cart.totalCost + item.price,
                    totalItems: state.cart.totalItems + 1
                }

                dispatch({ type: CHANGE_ITEM_QTY,payload: data})
            }
        } else {
            if(item) {
                //if item in cart 1 qty,than remove it from cart
                if (item.qty === 1) {
                    array = array.filter(item => item.uniqueId !== id)

                    const data = {
                        items: array,
                        totalCost: state.cart.totalCost - item.price,
                        totalItems: state.cart.totalItems - 1
                    }

                    dispatch({ type: CHANGE_ITEM_QTY,payload: data})
                } else {
                    item.qty -= 1
                    array[itemIndex] = item
    
                    const data = {
                        items: array,
                        totalCost: state.cart.totalCost - item.price,
                        totalItems: state.cart.totalItems - 1
                    }
    
                    dispatch({ type: CHANGE_ITEM_QTY,payload: data})
                }
            }
        }
    }

    const toggleExtraMocarella = (id: string,type: string): void => {
        let item = state.cart.items.find(item => item.uniqueId === id)
        const itemIndex = state.cart.items.findIndex(item => item.uniqueId === id)
        const mocarella = ingridientsList.find(item => item.id === 15)
        let array = state.cart.items

        if (item !== undefined && itemIndex  !== undefined) {
            const ingridientIndex = item.ingridients.findIndex(item => item.id === 15)

            if (type === 'add') {
                item.ingridients[ingridientIndex].qty += 1
               
                if (mocarella) {
                    item.price += mocarella.addPrice
                    array[itemIndex] = item
                    dispatch({ type: TOGGLE_EXTRA_MOCARELLA,payload: {items: array,totalCost: state.cart.totalCost + (mocarella?.addPrice * item.qty)}})
                }
            } else {
                item.ingridients[ingridientIndex].qty -= 1
               
                if (mocarella) {
                    item.price -= mocarella.addPrice
                    array[itemIndex] = item
                    dispatch({ type: TOGGLE_EXTRA_MOCARELLA,payload: {items: array,totalCost: state.cart.totalCost - (mocarella?.addPrice * item.qty)}})
                }
            }
        }
    }

    const clearCart = (): void => {
        dispatch({ type: CLEAR_CART })
    }

    const setCustomerData = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch({type: 'SET_CUSTOMER_DATA',payload: e})
    }

    const setFieldError = (errors: IErrors): void => {
        dispatch({ type: SET_FIELD_ERROR,payload: errors})
    }

    const setProductDetails = (product: IPizza): void => {
        dispatch({ type: SET_PRODUCT_DETAILS,payload: product})
    }

    const addIngridientToPizza = ( ingridient: IIngridients): void => {
        const prod: IIngridientsFull | undefined = ingridientsList.find(item => item.id === ingridient.id)
        const isDefault = state.productDetails.defaultObj?.ingridients.find(item => item.id === ingridient.id)

        if (prod && state.productDetails.defaultObj !== undefined) {
            if(isDefault) {
                dispatch({ type: ADD_INGRIDIENT_TO_PIZZA,payload: {
                    variants: state.productDetails.defaultObj.variants,
                    ingridients: [...state.productDetails.ingridients,ingridient]
                }})
            } else {
                dispatch({ type: ADD_INGRIDIENT_TO_PIZZA,payload: {
                        variants: state.productDetails.variants.map(size => {
                            return {
                                ...size,
                                variants: size.variants.map(crest => {
                                    return {
                                        ...crest,
                                        price: crest.price + prod.addPrice
                                    }
                                })
                            }
                        }),
                        ingridients: [...state.productDetails.ingridients,ingridient]
                    }
                })
            }
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

                dispatch({type: CHANGE_INGRIDIENT_QTY,payload: productDetailsObj})
            } else {
                return
            }
        } else {
            if (ingridientObj.qty === 1) {
                const isDefault = state.productDetails.defaultObj?.ingridients.find(item => item.id === ingridient.id)
                
                if (isDefault) {
                    productDetailsObj.ingridients = ingridientsArray.filter(item => item.id !== ingridient.id)
                    dispatch({type:CHANGE_INGRIDIENT_QTY,payload: productDetailsObj}) 
                } else {
                    productDetailsObj.ingridients = ingridientsArray.filter(item => item.id !== ingridient.id)
                    productDetailsObj.variants = productDetailsObj.variants.map(size => {
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
                    dispatch({type:CHANGE_INGRIDIENT_QTY,payload: productDetailsObj}) 
                }

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

                dispatch({type:CHANGE_INGRIDIENT_QTY,payload: productDetailsObj})
            } 
        }
    }

    const setAuthModalStatus = (status: 'active' | 'inactive'):void => {
        dispatch({type: SET_AUTH_MODAL_STATUS,payload: status})
    }

    const actions:IActionsList = {
        setCategory,
        setSort,
        addToCart,
        changeItemQty,
        toggleExtraMocarella,
        clearCart,
        setCustomerData,
        setFieldError,
        removeFromCart,
        setProductDetails,
        addIngridientToPizza,
        changeIngridientQty,
        setAuthModalStatus
    }

    return (
        <Context1.Provider value={{ state,dispatch,actions }}>
            {children}
        </Context1.Provider>
    )
}

export { StateProvider,Context1 }

