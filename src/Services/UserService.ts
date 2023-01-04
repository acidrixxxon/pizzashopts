import { ILoginUserResponse, IRefreshTokenResponse } from '../types/Response/UserServiceReponseType';
import { IUserUpdateData } from '../types/UserTypes';
import { BACKEND_URL } from '../Utils/vars';

import LocalStorageService from './LocalStorageService';

interface IUserData {
  email: string;
  password: string;
  copyPassword?: string;
}

class UserService {
  async loginUser(user: IUserData): Promise<ILoginUserResponse> {
    try {
      const response = await fetch(`${BACKEND_URL}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      return data;
    } catch (error: any) {
      console.log(error.message);

      return {
        success: false,
        message: error.message,
      };
    }
  }

  async registerUser(user: IUserData) {
    try {
      const response = await fetch(`${BACKEND_URL}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      return data;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async updateUserProfile(userData: IUserUpdateData, token: string | undefined) {
    try {
      const response = await fetch(`${BACKEND_URL}/user/update__profile`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: userData }),
      });

      const data = await response.json();

      return data;
    } catch (error: any) {
      console.log(error.message);
    }
  }

  async refreshToken(): Promise<IRefreshTokenResponse> {
    try {
      const token: string | null = LocalStorageService.getAccessToken();
      if (!token && token === null) throw new Error('Токен відсутній');

      const response = await fetch(`${BACKEND_URL}/user/refresh_token`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
      });

      const data: IRefreshTokenResponse = await response.json();
      if (data.success === false) LocalStorageService.removeAccessToken();
      if (data.success === true) LocalStorageService.saveAccessToken(data.user?.tokens.accessToken);

      return data;
    } catch (error: any) {
      console.log(error.message);

      return {
        message: error.message,
        success: false,
      };
    }
  }
}

export default new UserService();
