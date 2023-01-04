export interface ILoginErrors {
  email: null | string[];
  password: null | string[];
}

export interface IRegisterErrors {
  email: null | string[];
  password: null | string[];
  copyPassword: null | string[];
}
