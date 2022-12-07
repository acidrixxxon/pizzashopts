import React from 'react';
import LocalStorageService from '../../Services/LocalStorageService';
import UserService from '../../Services/UserService';
import { IRefreshTokenResponse, IRegisterUserResponse } from '../../types/Response/UserServiceReponseType';
import { ILoginUser, IRegisterUser, IUserUpdateData } from '../../types/UserTypes';
import { CLEAR_CART, LOGIN_USER, LOGOUT_USER, SET_AUTH_MODAL_STATUS, SET_REFRESH_TOKEN_LOADING, UPDATE_PROFILE } from '../constans';

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
