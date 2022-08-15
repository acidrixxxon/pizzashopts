import React from 'react'
import './_Container.scss'

type ContainerProps = {
    children: React.ReactNode
}

const Container:React.FC<ContainerProps> = ({ children }) => {

    return (
        <div className="container">
            {children}                                                                                                                                                                                                                                                                                                                                                                                                    
        </div>
  )
}

export default Container