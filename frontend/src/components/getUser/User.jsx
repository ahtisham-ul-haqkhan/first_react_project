import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from "axios";
import toast from 'react-hot-toast';

export default function User() {

  const [users, setUsers] = useState([]);
   useEffect(() =>{
    const fetchData = async()=>{
       const response = await axios.get("http://localhost:7000/api/view");
       setUsers(response.data);
    }

    fetchData();
   }, [])


   const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`http://localhost:7000/api/delete/${userId}`);
      setUsers((prevUser) => prevUser.filter((user) => user._id !== userId));
      // console.log(response);
        toast.success(response.data.msg, {position: "top-right"})
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }
  
  return (
    <div>
   
      <div className="container mt-5">
      <div className="row mt-5">
          <div className="col-md-10 mt-5">
          {/* <Link to="/create" className="btn btn-info">Add User</Link>  */}
          </div>
          <div className="col-md-2">
          <Link to="/create" className="btn btn-info">Add User</Link> 
          </div>
        </div>
      <table className="table table-bordered">
        
        <thead>
          <tr>
            <th>SNO</th>
            <th>Full Name</th>
            {/* <th>Last Name</th> */}
            <th>EMAIL</th>
            <th>Password</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=> {
              return (
                <tr key={user._id}>
                <td>{index+1}</td>
                <td>{user.fname}  {user.lname}</td>
                {/* <td>{user.lname}</td> */}
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                   <Link to={`/edit/`+user._id} className="btn btn-primary btn-sm me-2"><i className="fa-solid fa-pen-to-square"></i>Edit</Link>
                    <button onClick={()=> deleteUser(user._id)} className="btn btn-danger btn-sm">Delete</button>
                    </td>
              </tr>
              )
            })
          }
           
        </tbody>
      </table>
    </div>
    </div>
  );
}
