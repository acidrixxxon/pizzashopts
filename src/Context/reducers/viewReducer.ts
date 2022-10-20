import { SET_AUTH_MODAL_STATUS } from "../constans"
import { IAction, IView } from "../context_types"

export const viewReducer = (state: IView,action: IAction) => {
    switch(action.type){
        case SET_AUTH_MODAL_STATUS:
            return {
                ...state,
                authModal: {
                  status: action.payload
                }
            }
        default: 
            return state
    }
}