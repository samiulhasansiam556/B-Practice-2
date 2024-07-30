import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../Add/Add.css";
import axios from "axios";
import toast from 'react-hot-toast';

function Update(props) {

    
    const url = import.meta.env.VITE_SERVER_URL;

    const navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: ""
    });

    const inputHandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
        // console.log(user);
    };

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${url}/user/getone/${id}`);
                setUser(response.data);
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    const submitHandler = async(e)=>{

        e.preventDefault();
        try {
            const response = await axios.put(`${url}/user/update/${id}`, user);
            toast.success(response.data,{position:"top-right"})
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='addmain'>
            <Link to={"/"}>Back</Link>
            <h2>Update User</h2>
            <form onSubmit={submitHandler}>
                <div className='underdiv'>
                    <label>First Name:</label>
                    <input 
                        type='text' 
                        name='fname' 
                        onChange={inputHandler} 
                        value={user.fname} 
                    />
                </div>
                <div className='underdiv'>
                    <label>Last Name:</label>
                    <input 
                        type='text' 
                        name='lname' 
                        onChange={inputHandler} 
                        value={user.lname} 
                    />
                </div>
                <div className='underdiv'>
                    <label>Email:</label>
                    <input 
                        type='email' 
                        name='email' 
                        onChange={inputHandler} 
                        value={user.email} 
                    />
                </div>
                <div className='underdiv'>
                    <label>Password:</label>
                    <input 
                        type='password' 
                        name='password' 
                        onChange={inputHandler} 
                        value={user.password} 
                    />
                </div>
                <button type='submit'>UPDATE USER</button>
            </form>
        </div>
    );
}

export default Update;
