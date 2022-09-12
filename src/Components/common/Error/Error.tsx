import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'

const Error:React.FC<{value: string[] | null,className: string}> = ({value,className}) => {
    if(value === null) return null

    return (
        <AnimatePresence>
            <motion.span 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className={className + ' ' + 'input__error'}>{value[0]}</motion.span>
        </AnimatePresence>
  )
}

export default Error