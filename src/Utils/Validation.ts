import { ICustomerData, IErrors, IPaymentVariants } from "../types"

export const validateFields = (data: ICustomerData,paymentType: {id: number,title: string} | null): {errors: IErrors,result: boolean} => {
        const errors:IErrors = {
          name: null,
          phone: null,
          email: null,
          street: null,
          house: null,
          paymentType: null
        }
        const { name,phone,email,street,house } = data

        errors.name = []
        errors.phone = []
        errors.email = []
        errors.street = []
        errors.house = []
        errors.paymentType = []

        if(name.trim().length < 1) {
          errors.name.push(`Введіть ім'я`)
        } else if (name.trim().length < 4) {
          errors.name.push('Коротке імя')
        } else {
          errors.name = null
        }
      
        if (phone.trim().length === 0) {
          errors.phone.push('Введіть номер')
        } else if (phone.trim().length < 12) {
          errors.phone.push('Короткий номер')
        } else {
          errors.phone = null
        }

        if(email.trim().length === 0) {
          errors.email.push('Введіть email')
        } else {
          errors.email = null
        }

        if(street.trim().length === 0) {
          errors.street.push('Введіть вашу вулицю')
        } else {
          errors.street = null
        }

        if(house.trim().length === 0) {
          errors.house.push('Введіть номер будинку')
        } else {
          errors.house = null
        }

        if(paymentType === null) {
          errors.paymentType.push('Виберіть тип оплати')
        } else {
          errors.paymentType = null
        }

        let result = true;

        (Object.keys(errors) as (keyof typeof errors)[]).forEach((key, index) => {
          if (errors[key] !== null) {
            result = false
          } 
        });

        return {
          errors,
          result
        }
      }

  