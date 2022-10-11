import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { showAllUsers } from '../api/UserApi';
import "./Login.css";
import Navbar from '../../navbar/Navbar';
import { images } from '../../../constants';

const BasicLogin = () => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("Please Enter Credentails!");
    const [allUsers, setAllUsers] = useState([]);
    const [isDisabled, setIsDisabled] = useState();
    const navigate = useNavigate();

    const fetchData = async () => {
        let allUserList = await showAllUsers();
        setAllUsers(allUserList);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleUserName = (e) => {
        setIsDisabled(false);
        setUserName(e.target.value);
    };

    const handlePassword = (e) => {
        setIsDisabled(false);
        setPassword(e.target.value);
    };

    const handleValidations = () => {
        if (userName.length <= 0 && password.length <= 7) {
            setIsDisabled(true);
            setErrorMessage("Username or password cannot be empty!");
        }
        if (userName.length > 0 && password.length <= 7) {
            setIsDisabled(true);
            setErrorMessage("Password must contain atleast 8 characters.");
        }
        if (userName.length <= 0 && password.length > 0) {
            setIsDisabled(true);
            setErrorMessage("Username cannot be empty!");
        }
        if (userName.length > 0 && password.length >= 8) {
           let temp = allUsers.filter(item => {

                if ((userName === item.userName) && (password === item.password)) {
                    
                    setIsDisabled(false);
                    navigate("/");
                } else {
                    setIsDisabled(true);
                    setErrorMessage("Invalid Username or Password!");
                }
            });
            console.log(temp);
        }
    }

    return (
        <div className='login-section log'>
            <Navbar></Navbar>
            <div className='logImg'>
                <img src={images.image4} alt="" />
            </div>
            <form className='formControlLogin'>
                <h1 className='login'>Login</h1>
                {isDisabled &&
                    <div className="py-1 pl-1 rounded alert-danger alert-dismissible fade show" role="alert">{errorMessage}</div>
                }
                <div className='inputFields'>
                    <label>Username</label>
                    <input type="text" className='login-text' value={userName} onChange={e => handleUserName(e)} />
                    <label>Password</label>
                    <input type="password" className='login-password' value={password} onChange={e => handlePassword(e)} />
                </div>
                <button disabled={isDisabled} id="loginButton" className="btn btn-dark rounded-0" onClick={handleValidations}>Login</button>

            </form>
        </div>
    )
}

export default BasicLogin;