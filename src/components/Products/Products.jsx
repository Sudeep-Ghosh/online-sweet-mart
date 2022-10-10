import React from 'react'
import "./products.css"
import Product from '../Product/Product'
import Navbar from '../navbar/Navbar'

const Products = ({ products }) => {
  return (
    <div className='section prdct'>
      <Navbar/>
        <h1 className='heading'>Sweets for You</h1>
        <div className='all-products p2'>
          { products.map( (p) => 
            <Product p={p}/>
        )}
        </div>
    </div>
  )
}

export default Products