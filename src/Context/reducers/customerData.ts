import { ICustomerData } from "../../types"
import { SET_CUSTOMER_DATA, SET_FIELD_ERROR } from "../constans"
import { IAction } from "../context_types"

export const customerDataReducer = (state: ICustomerData,action: IAction) => {
    switch(action.type){
        case SET_CUSTOMER_DATA:
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            }
        case SET_FIELD_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        default: 
            return state
    }
}