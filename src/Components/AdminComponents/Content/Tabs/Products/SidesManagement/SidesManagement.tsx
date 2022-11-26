import React from 'react'
import { motion } from 'framer-motion'
import './_SidesManagement.scss'
import { ISideCategory, ISideCategory1 } from '../../../../../../types'
import ProductService from '../../../../../../Services/ProductService'
import Spinner from '../../../../../common/Icons/Spinner/Spinner'
import { AiOutlineDelete } from 'react-icons/ai'
import { GrAddCircle } from 'react-icons/gr'
import AdminService from '../../../../../../Services/AdminService'
import { Context1 } from '../../../../../../Context/Context'

const SidesManagement = () => {
  const [ categories,setCategories ] = React.useState<ISideCategory1[] | null>(null)
  const [ loading,setLoading ] = React.useState<boolean>(false)
 
  const { state: { socket }} = React.useContext(Context1)

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const data = await ProductService.fetchSidesCategories()

      setCategories(data.categories)
      if (data.success === true && data.categories.length > 0) {
        setLoading(false)
      }
    }

    fetchData()   
  },[])

  React.useEffect(() => {
    socket.on('sides_category_change',(data: any) => {
      setCategories(data)
    })
  },[])

  const createCategoryHandler = async () => {
    const data = await AdminService.createSideCategory('asdadasda23')
  }

  const removeCategoryHandler = async (categoryId: string | undefined): Promise<void> => {
    if (categoryId !== undefined) await AdminService.removeSideCategory(categoryId)
  }

  return (
    <motion.div 
      id="sidesManagement"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        {loading ? <Spinner className='sidesManagement__spinner'/> : <div className="sidesManagement__categories">
          <h4 className="sidesManagement__title">Категорії</h4>

          <ul className="sidesManagement__list">
            {categories !== null && categories.map((item) => {

              return (
              <li className="sidesManagement__list-item">
                <h4 className="sidesManagement__list-item__title">
                  {item.title}
                  <span className='sidesManagement__qty'>{item.products.length} позицій</span>
                </h4>

                <div className="sidesManagement__actions">
                  <button className='sidesManagement__btn removeBtn'  onClick={() => removeCategoryHandler(item._id)}>
                    <AiOutlineDelete />
                  </button>
                </div>
              </li> 
            )})}

            <li className='sidesManagement__addCategory' onClick={createCategoryHandler}>
              <GrAddCircle />
              Додати категорію
            </li>
          </ul>
        </div>}
    </motion.div>
  )
}

export default SidesManagement