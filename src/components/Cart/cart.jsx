import React from 'react'
import Button from '../Button'
import './Cart.css';
import {useState,useEffect} from "react";
import axios from "axios";
import Navbar from '../navbar/Navbar';

const Cart = () => {
    const [quantity, setQuantity] = useState(1);
    console.log(quantity);
    const [products,setProducts]=useState([]);

        // useEffect(()=>{
        //     axios.get("http://localhost:2097/api/v1/product")
        //     .then(response=>{
        //         console.log(response.data);
        //         setProducts(response.data);
        //         console.log(products);
        //     })
        //     .catch(error=>{
        //         console.log(error);
        //     })
        // },[])

    const totalP = (products.map( p => p.price ).reduce( (pr, total) => { return total += pr},0));
   console.log(products);


  return (
    <div className='cart-section'>
        <Navbar/>
        <div className='cart-block'> 
            <h1>Your Cart</h1>
            <div className='overflow p2'>
            { products.map((p,index) => (
                <div className='cart-product'>
                    {/* <img src={p.photo} alt="" /> */}
                    {/* <img src={`https://source.unsplash.com/random/?{\`${p.name}\`}/`}></img> */}
                    {/* <img src={`https://source.unsplash.com/random/?sweets/`}></img> */}
                    <img src=""></img>
                    
                    <div className='data'>
                        <h4>{p.name}</h4>
                        <div style={{ display:"flex", flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                        <label htmlFor='quantity' style={{ fontSize: '14px', fontWeight:'500', marginRight:'5px'}}>Qty:</label>
                        <input type="number" className='cart-input' min={1}  step={1} placeholder={1} id="quantity" name="quantity" onChange={(e) => setQuantity(e.target.value)}/>
                        </div>
                    </div>
                    { p.qty = quantity}
                    <p>{`Rs. ${p.price*p.qty }`}</p>
                    <Button value="Remove"></Button>
                </div>
            ))}
        </div>
        </div>
        <div className='order'>
            <h1>Order Details</h1>
            <div className='allTotal'>
                <div className='total'>
                    <p>Total</p>
                    <h4>{`Rs. ${totalP}`}</h4>
                    
                </div>
                <div className='total'>
                    <p>Delivery</p>
                    <p>FREE</p>
                </div>
                <div className='total final'>
                    <p>Total Amount</p>
                    <h4>{`Rs. ${totalP}`}</h4>
                </div>
            </div>  
            <Button value="Pay Now" href="payment" />
        </div>
    </div>
  )
}

export default Cart