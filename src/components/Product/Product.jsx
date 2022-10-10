import React from 'react'
import './product.css'
import Button from '../Button'

const Product = ({p}) => {
  return (
    <div className='product'>
      <div className='product-image'>
        <img src={p.photoPath} alt="" />
      </div>
      <h6>{p.name}</h6>
      <h3>{`Rs. ${p.price}`}</h3>
      <Button value="Add to Cart" href='cart'/>
    </div>
  )
}

export default Product