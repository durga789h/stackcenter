import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './allpage.css';
import Button from '../component/Button';
import { useAuth } from '../store/auth';
import {toast } from 'react-toastify';


export default function Login() {
    const LoginButtonText = "login now";
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            if (response.ok) {
            
                storeTokenInLS(data.token); // Store the token in localStorage
                setUser({
                    email: '',
                    password: ''
                });
                toast.success("login_success");
                
                navigate('/');
            } else {
                
                toast.error(data.message ? data.message : data.msg);
            }

        } catch (error) {
            console.error("login", error);
        }
    }

    return (
        <div className='alexs'>
            <div>
                <img src="https://www.factstoday.in/wp-content/uploads/2018/03/VAT-Registration.jpg" alt="login text" width={400} height={500} />
            </div>
            <div>
                <h1>login Form</h1>
                <form className='labels' onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' value={user.email} onChange={handleChange} autoComplete='off' required/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' value={user.password} onChange={handleChange} autoComplete='off' required/>

                    <Button buttonText={LoginButtonText} />
                </form>
            </div>
        </div>
    )
}
