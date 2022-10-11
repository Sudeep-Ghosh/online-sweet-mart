
import React from 'react'
import "./App.css"
import axios from "axios";
import { useEffect } from "react";
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './pages/admin/Admin';
import ShowCustomers from './pages/customer/showCustomer';
import ShowUsers from './pages/user/showUsers';
import User from './pages/user/User';
import DeleteUser from './pages/user/deleteUser';
import Payment from './components/Payment/Payment';
import Home from './components/Home/Home';
import Product from './pages/product/Product';
import BasicSignUp from './components/UserModule/SignUp/basicsignup';
import BasicLogin from './components/UserModule/Login/basiclogin';
import ShowOrderbill from './pages/orderbill/showOrderbill';
import CustomerHome from './pages/customer/customerHome';
import DeleteCustomer from './pages/customer/deleteCustomer';
import Cart from './components/Cart/cart';
import Products from './components/Products/Products';
import { images } from './constants';
import SweetOrder from './pages/sweetOrder/sweetOrder';
import ShowAllSweetOrder from './pages/sweetOrder/ShowAllSweetOrders/showAllSweetOrder';
import AddSweetOrder from './pages/sweetOrder/AddSweetOrder/addSweetOrder';
import DeleteSweetOrder from './pages/sweetOrder/DeleteSweetOrder/deleteSweetOrder';
import AdminProfile from './pages/admin/AdminProfile';





function App () {
  // handling product list for display
  const [productData, setProductData] = useState([]);

  // handling getAllProducts error for display
  const [errorData, setErrorData] = useState("");
  
  useEffect(() => {
    axios
        .get("http://localhost:2097/api/v1/product")
        .then((response) => setProductData(response.data))
        .catch((error) => setErrorData(error.response.data.errorMessage));
  }, []);
  
  return (
    <div className='App'>
    <BrowserRouter>
        
      <Routes>
      <Route path='/' element ={<Home/>}></Route>  
      <Route path='/admin' element ={<Admin/>}></Route>
      {/* <Route path ='/orders' element={<ShowOrders/>}></Route> */}
      <Route path='/showUsers' element ={<ShowUsers/>}></Route>
      <Route path='/users' element ={<User/>}></Route>
      <Route path='/deleteUser' element ={<DeleteUser/>}></Route> 
      <Route path='/payment' element ={<Payment/>}></Route>  
      <Route path='/product' element ={<Product/>}></Route>
      <Route path='/register' element ={<BasicSignUp/>}></Route> 
      <Route path='/login' element ={<BasicLogin/>}></Route>
      <Route path='/stats' element ={<ShowOrderbill/>}></Route>
      <Route path='/customer' element ={<CustomerHome/>}></Route>
      <Route path='/showCustomers' element ={<ShowCustomers/>}></Route> 
      <Route path='/deleteCustomer' element ={<DeleteCustomer/>}></Route>
      <Route path='/cart' element ={<Cart/>}></Route>
      <Route path='/products' element ={<Products products={productData}/>}></Route>
      <Route path='/orders' element ={<SweetOrder/>}></Route>
      <Route path='/showAllSweetOrder' element ={<ShowAllSweetOrder/>}></Route>
      <Route path='/addSweetOrder' element ={<AddSweetOrder/>}></Route>
      <Route path='/deleteSweetOrder' element ={<DeleteSweetOrder/>}></Route>
      <Route path='/adminProfile' element ={<AdminProfile/>}></Route>

      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

