import { SET_SOCKET } from "../constans"
import { IAction } from "../context_types"

export const socketReducer = (state: any | null,action: IAction) => {
    switch(action.type){
      case SET_SOCKET:
        return action.payload
        default: 
            return state
    }
}