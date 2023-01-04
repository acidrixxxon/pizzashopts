export interface IUser {
  email: string;
  isAdmin: boolean;
  firstName: string;
  secondName: string;
  phone: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  confirmed: boolean;
  _id: string;
}

export interface IUserUpdateData {
  firstName: string;
  secondName: string;
  phone: string;
  email: string;
}

export interface IUserFromServer {
  email: string;
  isAdmin: boolean;
  firstName: string;
  secondName: string;
  phone: string;
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  confirmed: boolean;
  _id: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export interface IRegisterUser {
  email: string;
  password: string;
  copyPassword: string;
}
