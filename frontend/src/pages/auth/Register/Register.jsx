import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import FundRise from '../../../assets/fundRiser.svg'
import Logo from '../../../assets/logo-white.png';
import LogoGreen from '../../../assets/Logo3.png';

const Register = () => {
    const [btnDisabled,setBtnDisabled] = useState(true);
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    useEffect(()=>{
        if(username !== "" && email !== "" && password !== ""){
           setBtnDisabled(false)
        }else if(!btnDisabled){
            setBtnDisabled(true)
        }
    },[username,email,password]);
  return (
    <div className='register-page'>
        
        <div className='welcome-section'>
            <div className='register-logo'>
                <img src={Logo} alt='white-logo' />
            </div>
            <div className='welcome-info'>
                <p className='welcome-register'>Welcome Back!</p>
                <p className='register-description'>Raise all the capital you need to start your business and achive your dreams today! </p>
                <Link to='/login' className='back-to-login'>Sign in</Link>
            </div>
            
        </div>
            <div className="register-view">
                <div className="register-header">
                    <img className='logo' src={LogoGreen} alt='logo'/>
                    <div>
                        <p>Create Account</p>
                        <small>Already have an account? <Link to="/login">Login</Link></small>  
                    </div>

                    
                </div>
                <form className='form-register'>
                    <div className="register-input-group">
                        <label htmlFor="username">Username</label>
                        <input placeholder='JaneHasIt_09' type='text' onChange={(e)=>setUsername(e.target.value)} />
                    </div>
                    <div className="register-input-group">
                        <label htmlFor="username">Email Address</label>
                        <input placeholder='example@gmail.com' type='text' onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="register-input-group">
                        <label htmlFor="username">Password</label>
                        <input type='password' onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button type='submit' className={`register-btn ${btnDisabled && 'register-disabled-btn cursor-not-allowed'}`} disabled={btnDisabled}>Sign in</button>
                </form>
            </div>
        
      
    </div>
  )
}

export default Register
