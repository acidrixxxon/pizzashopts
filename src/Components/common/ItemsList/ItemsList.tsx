import React from 'react'
import './_ItemsList.scss'


interface ComponentPros {
    children: JSX.Element | React.ReactNode
}

const ItemsList:React.FC<ComponentPros> = ({ children }) => {
    
    return (
        <div className='itemslist'>
            {children}
        </div>
    )
}

export default ItemsList