import {
  SEARCH_RESULT_ADD_INGRIDIENT,
  SEARCH_RESULT_REMOVE_INGRIDIENT,
  SET_AUTH_MODAL_STATUS,
  SET_REFRESH_TOKEN_LOADING,
  SET_SEARCH_RESULT_MODAL_DATA,
  SET_SEARCH_RESULT_MODAL_VISIBILITY,
  TOGGLE_MOBILE_NAV_VISIBILITY,
} from '../constans';
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
    case SET_SEARCH_RESULT_MODAL_DATA:
      return {
        ...state,
        search: {
          ...state.search,
          searchResultModal: {
            ...state.search.searchResultModal,
            data: action.payload,
          },
        },
      };
    case SET_SEARCH_RESULT_MODAL_VISIBILITY:
      return {
        ...state,
        search: {
          ...state.search,
          searchResultModal: {
            ...state.search.searchResultModal,
            status: action.payload,
          },
        },
      };
    case SEARCH_RESULT_ADD_INGRIDIENT:
      return {
        ...state,
        search: {
          ...state.search,
          searchResultModal: {
            ...state.search.searchResultModal,
            data: action.payload,
          },
        },
      };
    case SEARCH_RESULT_REMOVE_INGRIDIENT:
      return {
        ...state,
        search: {
          ...state.search,
          searchResultModal: {
            ...state.search.searchResultModal,
            data: action.payload,
          },
        },
      };
    case TOGGLE_MOBILE_NAV_VISIBILITY:
      return {
        ...state,
        nav: {
          ...state.nav,
          mobileNav: {
            ...state.nav.mobileNav,
            status: action.payload,
          },
        },
      };
    default:
      return state;
  }
};
