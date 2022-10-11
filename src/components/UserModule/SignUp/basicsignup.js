import React, { useState, useEffect } from 'react'
import "./signup.css";
import { addUser } from '../api/UserApi';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../navbar/Navbar';
import { images } from '../../../constants';

const BasicSignUp = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState();
    const [errorMessage, setErrorMessage] = useState("Please enter valid credentials!");
    const navigate = useNavigate();

    const handleUserName = (e) => {
        setIsDisabled(false);
        setUserName(e.target.value)
    }

    const handlePassword = (e) => {
        setIsDisabled(false);
        setPassword(e.target.value)
    }

    const handleConfirmPassword = (e) => {
        setIsDisabled(false);
        setConfirmPassword(e.target.value)
    }

    const handleValidations = () => {

        if (userName.length <= 0 && password.length <= 0 && confirmPassword <= 0) {
            setIsDisabled(true);
            setErrorMessage("Username or Password cannot be empty!");
        }
        if (userName.length > 0 && password.length <= 7 && confirmPassword.length <= 7) {
            setIsDisabled(true);
            setErrorMessage("Password and Confirm Password must contain atleast 8 characters");
        }
        if (userName.length <= 0 && (password.length > 0 || confirmPassword.length > 0)) {
            setIsDisabled(true);
            setErrorMessage("Username cannot be empty!")
        }
        if (userName.length > 0 && password.length >= 8 && confirmPassword.length <= 7) {
            if (password !== confirmPassword) {
                setIsDisabled(true);
                setErrorMessage("Passwords do not match!");
            }
        }
        if (userName.length > 0 && password.length >= 8 && confirmPassword.length >= 8) {
            if (password !== confirmPassword) {
                setIsDisabled(true);
                setErrorMessage("Passwords do not match!");
            }
        }
        if (userName.length > 0 && password.length >= 8 && password === confirmPassword) {
            let userObj = {
                userName,
                password,
                passwordConfirm: confirmPassword,
                type: "new"
            }
            addUser(userObj);
            console.log(userObj);
            alert("Successfully Registered");
            navigate("/login");
        }
    }

    return (
        <div className='section reg'>
            <Navbar></Navbar>
            <div className='regImg'>
                <img src={images.image2} alt="" />
            </div>
            <form className='formControlSignUp'>
                <h1 className='register'>Sign Up</h1>
                {isDisabled &&
                    <div className="py-1 pl-1 rounded alert-danger alert-dismissible fade show" role="alert">{errorMessage}</div>
                }
                <div className='inputFields'>
                    <label htmlFor="">Username</label>
                    <input type="text" className='signup-text' value={userName} onChange={e => { handleUserName(e) }} />
                    <label htmlFor="">Password</label>
                    <input type="password" className='signup-password' value={password} onChange={e => { handlePassword(e) }} />
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" className='signup-password' value={confirmPassword} onChange={e => { handleConfirmPassword(e) }} />
                    <button disabled={isDisabled} id="signupButton" className="btn btn-dark rounded-0" onClick={handleValidations}>Sign Up</button>

                </div>
            </form>
        </div>
    );
}

export default BasicSignUp;