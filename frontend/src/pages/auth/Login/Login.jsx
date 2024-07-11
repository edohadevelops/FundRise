import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import './style.css'
import FundRise from '../../../assets/fundRiser.svg'
import Logo from '../../../assets/Logo3.png';
import axios from 'axios';


const Login = () => {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [btnDisabled,setBtnDisabled] = useState(true);
    const navigate = useNavigate()


    useEffect(()=>{
        if(user !== "" && password !== ""){
           setBtnDisabled(false)
        }else if(!btnDisabled){
            setBtnDisabled(true)
        }
    },[user,password]);

    const handleLogin = (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/login"
        axios.post(url, {
            user,
            password
        }).then((result)=>{
            const {data} = result;
            localStorage.setItem('token',data.token);
            console.log(data)
            navigate("/")
        }).catch((err)=>{
            console.error(err)
        })
    }
    
  return (
    <div className='login-page'>
        <div className='login-div'>
            <div className="login-view">
                <img className='logo' src={Logo} alt='logo'/>
                <div className="login-header">
                    <p>Sign in to FundRise</p>
                    <small>Don't have an account? <Link to="/sign-up">Sign up</Link></small>
                </div>
                <form className='form-login' onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username or Email Address</label>
                        <input placeholder='example@gmail.com' type='text' onChange={(e)=>setUser(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Password</label>
                        <input type='password' onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <div className="forgot-password">
                        <a href='#'>Forgot Password?</a>
                    </div>
                    <button type='submit' className={`login-btn ${btnDisabled && 'login-disabled-btn cursor-not-allowed'}`}>Sign in</button>
                </form>
            </div>
        </div>
        <div className='left-div'>
            <img src={FundRise} alt='Place holder'/>
            <p className='text-5xl font-extrabold capitalize mt-0'>FundRise</p>
            <p className='w-[50%] text-center text-gray-700'>Raise all the capital you need to start your business and achive your dreams today! </p>
        </div>
        
      
    </div>
  )
}

export default Login
