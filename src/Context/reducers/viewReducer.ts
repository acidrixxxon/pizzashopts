import { SET_AUTH_MODAL_STATUS, SET_REFRESH_TOKEN_LOADING } from '../constans';
import { IAction, IView } from '../context_types';

export const viewReducer = (state: IView, action: IAction) => {
  switch (action.type) {
    case SET_AUTH_MODAL_STATUS:
      return {
        ...state,
        authModal: {
          status: action.payload,
        },
      };
    case SET_REFRESH_TOKEN_LOADING:
      return {
        ...state,
        loaders: {
          ...state.loaders,
          refreshTokenLoading: action.payload,
        },
      };
    default:
      return state;
  }
};
