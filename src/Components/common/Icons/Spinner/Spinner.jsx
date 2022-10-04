import React from 'react'
import './_Spinner.scss'

const Spinner = ({ className = '' }) => {
  return (
    <div className={`lds-ring ${className}`}><div></div><div></div><div></div><div></div></div>
  )
}

export default Spinner