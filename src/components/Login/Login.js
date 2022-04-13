import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/shop');
    }

    return (
        <div className='form-container'>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" placeholder='Email' name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" placeholder='Password' name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    <div style={{color: 'red', textAlign: 'center'}}>
                        {
                            loading && <p>Loading...</p>
                        }
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