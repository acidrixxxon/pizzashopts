import { IUserFromServer } from '../UserTypes';

export interface IRefreshTokenSuccess {
  success: boolean;
  message: string;
  user: IUserFromServer;
}

export interface IRefreshTokenError {
  message: string;
  success: boolean;
  user?: any;
}

export type IRefreshTokenResponse = IRefreshTokenSuccess | IRefreshTokenError;

export interface IRegisterUserResponseSuccess {
  success: boolean;
  message: string;
  user: IUserFromServer;
}

export interface IRegisterUserResponseError {
  success: boolean;
  message: string;
  user?: any;
}

export type IRegisterUserResponse = IRegisterUserResponseSuccess | IRegisterUserResponseError;
