import React from 'react'
import "./adminProfile.scss"
import { images } from '../../constants';

const AdminProfile = () => {

  return (
    <div className='admin-section'>
        
      <div className='admin-text'>
      <h1><span style={{color:"#4d0019"}}>Admin</span> Profile</h1>

        <div className='admin-detail'>
            <h1>Admin Details</h1>
            <div className='admin-Total'>
                <div className='ad-total'>
                    <p>Admin Name</p>
                    <h4>John Wick</h4>    
                </div>
                <div className='ad-total'>
                    <p>Admin ID</p>
                    <p>adm73746374</p>
                </div>
                <div className='ad-total'>
                    <p>Date Joined</p>
                    <p>06-10-2022</p>
                </div>
                <div className='ad-total'>
                    <p>Gender</p>
                    <p>Male</p>
                </div>
                <div className='ad-total ad-final'>
                    <p>Contact:</p>
                    <h5>JohnWick@gmail.com</h5>
                </div>
            </div>  
        </div>    
      </div>
      <div className='admin-image'>
        <img src={images.image5} alt="" />
      </div>
    </div>
  )
}

export default AdminProfile;