import { BACKEND_URL } from "../Utils/vars"



class OrderService {

  async newOrder(order: any) {
    try {
      const response = await fetch(`${BACKEND_URL}/order/create`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({order})
      })

      const data = await response.json()
      
      return data
    } catch (error: any) {
      console.log(error)

      return {
        errorMessage: error.message,
        success: false,
    }
    }
  }

  async getOrderById(id: string) {
    try {
      const response = await fetch(`${BACKEND_URL}/order/${id}`,{
        method: "GET"
      })

      const data = await response.json()
      
      return data
    } catch (error: any) {
      console.log(error)

      return {
        errorMessage: error.message,
        success: false,
      }
    }
  }

  async getUserOrders(token: string | undefined) {
    try {
      const response = await fetch(`${BACKEND_URL}/order/getuserorders`,{
        method: "GET",
        headers: {
          "authorization": `Bearer ${token}`
        }
      })

      const data = await response.json()

      return data
    } catch (error: any) {
      console.log(error)

      return {
        errorMessage: error.message,
        success: false,
      }
    }
  }
}



export default new OrderService()

