import React from 'react';
import { toast } from 'react-toastify';

import LocalStorageService from '../../Services/LocalStorageService';
import UserService from '../../Services/UserService';
import { initialCustomerData } from '../../Utils/initialStore';
import { IRefreshTokenResponse, IRegisterUserResponse } from '../../types/Response/UserServiceReponseType';
import { ILoginUser, IRegisterUser, IUserUpdateData } from '../../types/UserTypes';
import {
  CLEAR_CART,
  INIT_CUSTOMER_DATA,
  LOGIN_USER,
  LOGOUT_USER,
  SET_AUTH_MODAL_STATUS,
  SET_REFRESH_TOKEN_LOADING,
  UPDATE_PROFILE,
} from '../constans';

interface IActions {
  loginUserProccess: (user: ILoginUser) => void;
  registerUserProcess: (user: IRegisterUser) => Promise<IRegisterUserResponse>;
  refreshTokenProccess: () => void;
  userLogoutProcess: () => void;
  updateUserProfile: (formData: IUserUpdateData, token: string | undefined) => Promise<{ message: string; success: boolean }>;
}

export const getUserActions = (dispatch: React.Dispatch<any>): IActions => {
  const loginUserProccess = async (user: ILoginUser) => {
    const response = await UserService.loginUser(user);

    if (response.success === true && response.user.confirmed === true) {
      LocalStorageService.saveAccessToken(response.user.tokens.accessToken);

      dispatch({ type: LOGIN_USER, payload: response.user });
      dispatch({ type: SET_AUTH_MODAL_STATUS, payload: 'inactive' });
      dispatch({
        type: INIT_CUSTOMER_DATA,
        payload: {
          firstName: response.user.firstName,
          secondName: response.user.secondName,
          email: response.user.email,
          phone: response.user.phone,
        },
      });
    } else {
      toast.error(response.message);
    }
  };

  const registerUserProcess = async (user: IRegisterUser): Promise<IRegisterUserResponse> => {
    const data = await UserService.registerUser(user);

    return data;
  };

  const refreshTokenProccess = async (): Promise<any> => {
    dispatch({ type: SET_REFRESH_TOKEN_LOADING, payload: 'active' });

    const result: IRefreshTokenResponse = await UserService.refreshToken();

    if (result.success === true) {
      dispatch({ type: LOGIN_USER, payload: result.user });
      dispatch({ type: SET_REFRESH_TOKEN_LOADING, payload: 'inactive' });
      dispatch({
        type: INIT_CUSTOMER_DATA,
        payload: {
          firstName: result.user.firstName,
          secondName: result.user.secondName,
          email: result.user.email,
          phone: result.user.phone,
        },
      });
    } else {
      dispatch({ type: LOGIN_USER, payload: null });
      dispatch({ type: SET_REFRESH_TOKEN_LOADING, payload: 'inactive' });
    }
  };

  const userLogoutProcess = (): void => {
    LocalStorageService.removeAccessToken();
    LocalStorageService.removeCartFromStorage();

    dispatch({ type: CLEAR_CART });
    dispatch({ type: LOGOUT_USER });
    dispatch({ type: INIT_CUSTOMER_DATA, payload: initialCustomerData });
  };

  const updateUserProfile = async (
    formData: IUserUpdateData,
    token: string | undefined,
  ): Promise<{ message: string; success: boolean }> => {
    const result: IRefreshTokenResponse = await UserService.updateUserProfile(formData, token);

    if (result.success === true) {
      dispatch({ type: UPDATE_PROFILE, payload: result.user });
    }

    return {
      success: result.success,
      message: result.message,
    };
  };

  return {
    loginUserProccess,
    refreshTokenProccess,
    userLogoutProcess,
    updateUserProfile,
    registerUserProcess,
  };
};
