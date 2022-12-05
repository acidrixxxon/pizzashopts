import { LOGIN_USER, LOGOUT_USER, UPDATE_PROFILE } from "../constans"
import { IAction, IUser } from "../context_types"


export const userReducer = (state: IUser | null,action: IAction) => {
    switch(action.type){
      case LOGIN_USER:
        return action.payload
      case UPDATE_PROFILE:
        return {
          ...state,
          ...action.payload
        }
      case LOGOUT_USER:
        return null
      default: 
        return state
    }
}