import { SearchResultInterface } from '../types'


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

    async fetchProducts(category: number,sort: number) {
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

}


export default new ProductService()