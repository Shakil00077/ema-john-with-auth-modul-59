import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop')
    }


    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 character or longer')
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2>Sign-Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" placeholder='Email' name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" placeholder='Password' name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-Password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" placeholder='Confirm-Password' name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p className='form-account'>
                    Already have an account? <Link className='form-link' to='/login'>Log-In</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;