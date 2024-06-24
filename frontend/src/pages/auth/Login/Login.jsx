import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import FundRise from '../../../assets/fundRiser.svg'
import Logo from '../../../assets/Logo3.png';


const Login = () => {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [btnDisabled,setBtnDisabled] = useState(true);

    useEffect(()=>{
        if(user !== "" && password !== ""){
           setBtnDisabled(false)
        }else if(!btnDisabled){
            setBtnDisabled(true)
        }
    },[user,password]);
  return (
    <div className='login-page'>
        <div className='login-div w-[40%] h-full'>
            <div className="login-view">
                <img className='logo' src={Logo} alt='logo'/>
                <div className="login-header">
                    <p>Sign in to FundRise</p>
                    <small>Don't have an account? <Link to="/sign-up">Sign up</Link></small>
                </div>
                <form className='form-login'>
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
