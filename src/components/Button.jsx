import React from 'react'
import './button.scss'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <div className='my-btn'><Link to={`/${props.href}`} className='my-btn-alink'><span>{props.value}</span></Link></div>
  )
}

export default Button