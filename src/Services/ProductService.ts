


class ProductService {

    async search(query: String) {
        try {
            const res = await fetch(`https://62c897d28c90491c2cb80379.mockapi.io/global?title=${query}`)
            const data = await res.json()

            return data
        } catch (error) {
            console.log(error)
        }
    }

}


export default new ProductService()