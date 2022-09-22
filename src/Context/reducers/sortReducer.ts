import { SET_CATEGORY, SET_SORT } from "../constans"
import { IAction, ISort } from "../context_types"

export const sortReducer = (state: ISort,action: IAction) => {
    switch(action.type){
        case SET_SORT:
            return {
                ...state,
                sort: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default: 
            return state
    }
}