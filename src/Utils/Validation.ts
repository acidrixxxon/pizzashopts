import { ICustomerData, IErrors } from '../types';
import { ILoginUser } from '../types/UserTypes';

export const validateFields = (data: ICustomerData): { errors: IErrors; result: boolean } => {
  const errors: IErrors = {
    name: null,
    phone: null,
    email: null,
    street: null,
    house: null,
    paymentType: null,
    city: null,
    restaurant: null,
  };
  const { firstName, phone, email, street, house, city, restaurant, paymentType } = data;

  if (data.orderType === 0) {
    errors.name = [];
    errors.phone = [];
    errors.email = [];
    errors.street = [];
    errors.house = [];
    errors.paymentType = [];

    if (firstName) {
      if (firstName.trim().length < 1) {
        errors.name.push(`Введіть ім'я`);
      } else if (firstName.trim().length < 4) {
        errors.name.push('Коротке імя');
      } else {
        errors.name = null;
      }
    }

    if (phone.trim().length === 0) {
      errors.phone.push('Введіть номер');
    } else if (phone.trim().length < 12) {
      errors.phone.push('Короткий номер');
    } else {
      errors.phone = null;
    }

    if (email.trim().length === 0) {
      errors.email.push('Введіть email');
    } else {
      errors.email = null;
    }

    if (street.trim().length === 0) {
      errors.street.push('Введіть вашу вулицю');
    } else {
      errors.street = null;
    }

    if (house.trim().length === 0) {
      errors.house.push('Введіть номер будинку');
    } else {
      errors.house = null;
    }

    if (paymentType === null) {
      errors.paymentType.push('Виберіть тип оплати');
    } else {
      errors.paymentType = null;
    }

    let result = true;

    (Object.keys(errors) as (keyof typeof errors)[]).forEach((key) => {
      if (errors[key] !== null) {
        result = false;
      }
    });

    return {
      errors,
      result,
    };
  } else {
    errors.city = [];
    errors.restaurant = [];
    errors.paymentType = [];
    errors.name = [];
    errors.phone = [];
    errors.email = [];

    if (paymentType === null) {
      errors.paymentType.push('Виберіть тип оплати');
    } else {
      errors.paymentType = null;
    }

    if (city === null) {
      errors.city.push('Ви не обрали місто');
    } else {
      errors.city = null;
    }

    if (restaurant === null) {
      errors.restaurant.push('Ви не обрали рестаран');
    } else {
      errors.restaurant = null;
    }

    let result = true;

    (Object.keys(errors) as (keyof typeof errors)[]).forEach((key) => {
      if (errors[key] !== null) {
        result = false;
      }
    });

    return {
      errors,
      result,
    };
  }
};

interface ILoginErrors {
  email: string[];
  password: string[];
}
export const validateLoginUserForm = ({ email, password }: ILoginUser): { result: boolean; errors: ILoginErrors } => {
  const errors: ILoginErrors = {
    email: [],
    password: [],
  };

  let result = true;

  if (email.trim() === '') {
    errors.email.push('Ви не ввели email');
    result = false;
  }

  if (password === '') {
    errors.email.push('Ви не ввели пароль');
    result = false;
  } else if (password.length < 8) {
    errors.password.push('Пароль має бути від 8ми символів!');
    result = false;
  }

  return {
    result,
    errors,
  };
};
