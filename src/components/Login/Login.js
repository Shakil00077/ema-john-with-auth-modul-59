import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder='Email' name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" placeholder='Password' name="password" id="" required/>
                    </div>
                    <input className='form-submit' type="submit" value="LogIn" />
                </form>
                <p className='form-account'>
                    New to Ema-John? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;