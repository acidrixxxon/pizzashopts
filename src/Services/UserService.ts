import { IUserUpdateData } from "../types/UserTypes"
import { BACKEND_URL } from "../Utils/vars"

interface IUserData {
  email: string,
  password: string,
  copyPassword?: string
}


class UserService {
  async loginUser(user: IUserData) {
    try {
      const response = await fetch(`${BACKEND_URL}/user/login`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const data = await response.json()

      return data
    } catch (error: any) {
      console.log(error.message)
    }
  }

  async registerUser(user: IUserData) {
    try {
      const response = await fetch(`${BACKEND_URL}/user/register`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const data = await response.json()

      return data
    } catch (error: any) {
      console.log(error.message)
    }
  }

  async updateUserProfile(userData: IUserUpdateData,token: string | undefined) {
    try {
      const response = await fetch(`${BACKEND_URL}/user/update__profile`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({data: userData})
      })

      const data = response.json()

      return data
    } catch (error: any) {
      console.log(error.message)
    }
  }
}


export default new UserService()