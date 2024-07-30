import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


import "./Add.css";
import toast from 'react-hot-toast';

function Add(props) {

    const url = import.meta.env.VITE_SERVER_URL;

   
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });

    const inputHandler = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${url}/user/create`, user);
            toast.success(response.data,{position:"top-right"})
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='addmain'>
            <Link to={"/"}>Back</Link>
            <h2>Add new user</h2>
            <form onSubmit={submitHandler}>
                <div className='underdiv'>
                    <label>First Name:</label>
                    <input type='text' name='fname' onChange={inputHandler} required />
                </div>
                <div className='underdiv'>
                    <label>Last Name:</label>
                    <input type='text' name='lname' onChange={inputHandler} required />
                </div>
                <div className='underdiv'>
                    <label>Email:</label>
                    <input type='email' name='email' onChange={inputHandler} required />
                </div>
                <div className='underdiv'>
                    <label>Password:</label>
                    <input type='password' name='password' onChange={inputHandler} required />
                </div>
                <button type='submit'>ADD USER</button>
            </form>
        </div>
    );
}

export default Add;
