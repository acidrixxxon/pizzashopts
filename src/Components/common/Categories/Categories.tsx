import React from 'react'
import { Context1 } from '../../../Context/Context'
import { CategoryInterface } from '../../../types'
import './_Categories.scss'

const Categories = () => {
    const categoriesList: CategoryInterface[] = [{id: 0,title: 'Піца'},{id: 1,title: 'Сайди'},{id: 2,title: 'Напої'}]

    // const { state: { category },dispatch,actions: { setCategory,setSortType }} = React.useContext(Context)
    const { state: { sort: { category }}, actions: { setSort,setCategory }} = React.useContext(Context1)

    const changeCategoryHandler = (id: number):void => {
        setCategory(id)
        setSort(0)
    }


        return (
            <div className='categories'>
                <ul className="categories__list">
                    {categoriesList.map((item) => {
                        return <li 
                            key={item.id}
                            onClick={() => changeCategoryHandler(item.id)}
                            className={category === item.id ? 'categories__item active' : 'categories__item'}>
                                {item.title}
                        </li>
                    })}
                </ul>
            </div>
        )
}

export default Categories