import React from 'react'

const Alert = ({text, onClose}) => {
  return (
    <div className="alert alert-warning d-flex mb-3 " role="alert">
      <h6 className="flex-grow-1 text-center align-self-end" >{text}</h6>
      <button className="btn" onClick={() => onClose('')}>x</button>
    </div>
  )
}

export default Alert
