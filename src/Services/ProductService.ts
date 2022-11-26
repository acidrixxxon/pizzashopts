import { IDrinkProductsResponse, IPizzaCategory } from "../types";
import { BACKEND_URL } from "../Utils/vars";

class ProductService {

    async search(query: string) {
        try {
            const res = await fetch(`https://62c897d28c90491c2cb80379.mockapi.io/global?title=${query}`)
            const data = await res.json()

            return data
        } catch (error) {
            console.log(error)
        }
    }

    async fetchProducts(category:number,sort:number) {
        try {
            let res;
            if (sort === 0) {
                 res = await fetch(`https://62c897d28c90491c2cb80379.mockapi.io/global?class=${category}&sortBy=rating&order=desc`)
                const data = await res.json()

                return data
            } else if (sort === 1) {
                const res = await fetch(`https://62c897d28c90491c2cb80379.mockapi.io/global?class=${category}&sortBy=defaultPrice&order=desc`)
                const data = await res.json()

                return data
            } else if (sort === 2) {
                const res = await fetch(`https://62c897d28c90491c2cb80379.mockapi.io/global?class=${category}&sortBy=defaultPrice&order=asc`)
                const data = await res.json()

                return data
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    async fetchPizzaCategories() {
        try {
            const res = await fetch(`${BACKEND_URL}/pizza/get_allcategories`)
            const data = await res.json()
    
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async fetchPizzaProducts(sort: number) {
        try {
            const res = await fetch(`${BACKEND_URL}/pizza/get_allproducts?sort=${sort}`)
            const data = await res.json()
    
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async fetchSidesCategories() {
        try {
            const res = await fetch(`${BACKEND_URL}/sides/get_allcategories`)
            const data = await res.json()

            if (data) return data
        } catch (error) {
            console.log(error)
        }
    }

    async fetchSidesProducts(sort: number) {
        try {
            const res = await fetch(`${BACKEND_URL}/sides/get_allproducts?sort=${sort}`)
            const data = await res.json()
    
            return data
        } catch (error) {
            console.log(error)
        }
    }

    async fetchDrinksCategories() {
        try {
            const response = await fetch(`${BACKEND_URL}/drinks/get_allcategories`)
            const data = await response.json()

            return data
        } catch (error) {
            console.log(error)
        }
    }

    async fetchDrinksProducts(sort: number): Promise<IDrinkProductsResponse> {
        try {
            const res = await fetch(`${BACKEND_URL}/drinks/get_allproducts?sort=${sort}`)
            const data = await res.json()
    
            return data
        } catch (error: any) {
            console.log(error)
            return {
                message: error.message,
                success: false,
                products: null
            }
        }
    }

    async fetchProductsByNewApi(category: string) {
        try {
            const res = await fetch(`${BACKEND_URL}/${category}/get_allproducts`)
            const data = await res.json()

            return data
        } catch (error) {
            console.log(error)
        }
    }

    async getProductById(id: string | undefined):Promise<any> {
        const res = await fetch(`https://62c897d28c90491c2cb80379.mockapi.io/global?id=${id}`)
        const data = await res.json()

        return data[0]
    }

    async getRestaurants() {
        try {
            const res = await fetch(`https://62c897d28c90491c2cb80379.mockapi.io/restaurants`)
            const data = await res.json()

            return data
        } catch (error) {
            console.log(error)
        }
    }
}


export default new ProductService()