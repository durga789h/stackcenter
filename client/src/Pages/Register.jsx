import React, { useState } from 'react';
import './allpage.css';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast } from 'react-toastify';


export default function Register() {
    const homeButtonText = "Sign Up Now";
    const [user, setUser] = useState({
        username: '',
        email: '',
        phone: '',
        password: ''
    });
    const navigate = useNavigate();
    const handleRegister = async() => {
  console.log("Register successful");
        setUser({
            username: '',
            email: '',
            phone: '',
            password: ''
        })
        toast.success("registration_sucessful");
        
        navigate('/login');
    }
    const {storeTokenInLS}=useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user),
            });
            const data=await response.json(); //data from server if(user)
            console.log("server info",data)

            if (response.ok) {
                // Handle successful registration here
               
                storeTokenInLS(data.json)
             
                //localStorage.setItem("token",data.token)
                handleRegister();
            } else {
                // Handle registration failure
                console.error('Registration failed:', response.statusText);
               toast.error(data.message?data.message:data.msg);
            }
        } catch (error) {
            console.error("register", error);
        }
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]: value });
    }

   


    return (
        <div className='alexs'>
            <div className='m-10'>
            <h1 className='mb-40 ml-60 text-rose-600 underline text-base'>Registration Form</h1>
                <img src="https://www.factstoday.in/wp-content/uploads/2018/03/VAT-Registration.jpg" alt="registration imag" className='mt-[-120px] h-15 ml-40'/>
                
            </div>
            <div>
               
                <form className='labels' onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' id='username' value={user.username} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='email' value={user.email} onChange={handleChange} />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name='phone' id='phone' value={user.phone} onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='password' value={user.password} onChange={handleChange} />
                    <Button buttonText={homeButtonText} type="submit" />
                </form>
            </div>
        </div>
    )
}