import React, { useEffect, useState } from 'react'
import "../addUser/add.css";
import { useNavigate, useParams, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

export default function Edit() {
    const users  = {
        fname: "",
        lname: "",
        email: ""
    }
    const  {id} = useParams();
    const  navigate = useNavigate();
    const  [user, setUser] = useState(users);

    const  inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        // console.log(user);
    }

    useEffect(() => {
        axios.get(`http://localhost:7000/api/getone/${id}`)
        .then((response)=>{
            // console.log(response)
            setUser(response.data)

        })
        .catch((error)=>{
            console.log(error);
        })
    }, [id])

    const submitForm = async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:7000/api/update/${id}`, user)
        .then((response)=> {
            toast.success(response.data.msg, {position:"top-right"})
            navigate("/")
        })
        .catch(error => console.log(error));
    }
  return (
    <div>
     <div className="addUser">
       <h3 className="text-center">Update User</h3>
     <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup" onSubmit={submitForm}>
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" value={user.fname} name="fname" onChange={inputChangeHandler} autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" id="lname" value={user.lname} name="lname" onChange={inputChangeHandler} autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={user.email} name="email" onChange={inputChangeHandler} autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE USER</button>
            </div>
        </form>
     </div>
    </div>
  )
}
