import React from 'react'
import "./home.scss"
import Navbar from '../navbar/Navbar'
import Button from "../Button"

import { images } from '../../constants';

const Home = () => {

  return (
    <div className='section' id='homepage'>
        <Navbar/>
      <div className='text'>
        <h1>Sweet Mart</h1>
        <p>You have to love what you do. Each dessert has its own story: the person you prepare it for, the feelings you experience while you prepare it… Everything enters your hands and while you knead, you think with your hands, love with your hands and create with your hands.</p>
        <Button value="Buy" href="products"/>
      </div>
      <div className='image'>
        {/* <img src={images.image3} alt="" /> */}
      </div>
    </div>
  )
}

export default Home