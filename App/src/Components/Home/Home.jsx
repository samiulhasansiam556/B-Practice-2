import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import axios from "axios";
import toast from 'react-hot-toast';

function Home(props) {
    const url = import.meta.env.VITE_SERVER_URL;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/user/getall`);
                setUsers(response.data);
                console.log(response);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, []);

    const deleteUser = async (id) =>{
        await axios.delete(`${url}/user/delete/${id}`)
        .then((response) => {
             setUsers((prev)=> prev.filter((user)=>user._id !==id))
             toast.success(response.data.msg,{position:"top-right"})
            })
            .catch((error) => {
                console.error("Error deleting user", error);
                });
            
    }

    return (
        <div className='userTable'>
            <div className='searchAndAdd'>
                <input type='text' placeholder="Search..." />
                <Link to={"/add"}>Add User</Link>
            </div>
            <table border={1} cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr className='head'>
                        <th>S.NO</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td className='btn'>
                                    <Link to={`/update/`+ user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                                    <button onClick={()=>deleteUser(user._id)}><i className="fa-solid fa-trash"></i></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Home;
