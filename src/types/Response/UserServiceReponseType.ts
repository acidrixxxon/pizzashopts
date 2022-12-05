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
