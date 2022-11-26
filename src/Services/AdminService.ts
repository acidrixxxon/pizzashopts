class AdminService {

  async createSideCategory(title: string) {
      try {
          const res = await fetch(`http://localhost:3001/sides/add_category`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              title
            })
          })
          const data = await res.json()

          return data
      } catch (error) {
          console.log(error)
      }
  }

  async removeSideCategory(categoryId: string): Promise<void> {
    try {
      const res = await fetch(`http://localhost:3001/sides/remove_category`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          categoryId
        })
      })
      const data = await res.json()

      return data
    } catch (error) {
      console.log(error)
    }
  }
}



export default new AdminService()