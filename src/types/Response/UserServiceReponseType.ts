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
  success: true;
  message: string;
  user: IUserFromServer;
}

export interface IRegisterUserResponseError {
  success: false;
  message: string;
  user?: any;
}

export type IRegisterUserResponse = IRegisterUserResponseSuccess | IRegisterUserResponseError;

export interface ILoginUserResponseSuccess {
  success: true;
  message: string;
  user: IUserFromServer;
}

export interface ILoginUserResponseError {
  success: false;
  message: string;
  user?: null;
}

export type ILoginUserResponse = ILoginUserResponseSuccess | ILoginUserResponseError;
