import React from 'react'
import { Context } from '../../../Context'
import { CategoryInterface } from '../../../types'
import './_Categories.scss'

const Categories = () => {
    const categoriesList: CategoryInterface[] = [{id: 0,title: 'Піца'},{id: 1,title: 'Сайди'},{id: 2,title: 'Напої'},{id: 3,title: 'Десерти'}]

    const { state: { category },dispatch,actions: { setCategory,setSortType }} = React.useContext(Context)

    const changeCategoryHandler = (id: number):void => {
        setCategory(id)
        setSortType(0)
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