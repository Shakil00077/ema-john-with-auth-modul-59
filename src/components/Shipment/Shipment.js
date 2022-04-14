import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user ] = useAuthState(auth)

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneNumberBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {email, name, address, phone,}
        console.log(shipping);
    }
    return (
        <div className='form-container'>
            <div>
                <h2>Shiping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="Name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" placeholder='Name' name="Name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Email">Your Email</label>
                        <input value={user?.email} readOnly type="text" placeholder='Email' name="Email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" placeholder='Address' name="Address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Phone">Phone Number</label>
                        <input onBlur={handlePhoneNumberBlur} type="text" placeholder='Phone' name="Phone" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;