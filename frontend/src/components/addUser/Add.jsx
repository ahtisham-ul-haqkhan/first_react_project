import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./add.css"; 
import axios from 'axios';
import toast from 'react-hot-toast';


export default function Add() {
    const users = {
        fname:"",
        lname:"",
        email:"",
        password:""
      }

  const [user, setUser] = useState(users);
  const navigate = useNavigate();
    const inputHandle = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name] : value});
        // console.log(user);
        // console.log(name);
        // console.log(value);
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:7000/api/create", user)
        .then((response)=> {
            toast.success(response.data.msg, {position: "top-right"})
            navigate("/")
            // console.log(response)
        })
        .catch(error => console.log(error))
    }
  return (
    <div className="addUser">
      <div className="mb-4">
        <Link to="/" className="btn btn-primary">Back</Link>
      </div>

        <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" onChange={inputHandle} id="fname" name="fname" autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" onChange={inputHandle} id="lname" name="lname" autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" onChange={inputHandle} id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <label htmlFor="password">Password</label>
                <input type="password"  onChange={inputHandle}id="password" name="password" autoComplete='off' placeholder='password' />
            </div>
            <div className="inputGroup">
                <button type="submit">ADD USER</button>
            </div>
        </form>
    </div>
  );
}
