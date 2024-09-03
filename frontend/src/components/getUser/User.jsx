import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from "axios";

export default function User() {

  const [users, setUsers] = useState([]);
   useEffect(() =>{
    const fetchData = async()=>{
       const response = await axios.get("http://localhost:7000/api/view");
       setUsers(response.data);
    }

    fetchData();
   }, [])
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>EMAIL</th>
            <th>Password</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=> {
              return (
                <tr>
                <td>{index+1}</td>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className="btn btn-primary btn-sm me-2">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              )
            })
          }
            <tr>
              {/* <td>{user.sno}</td>
              <td>{user.email}</td>
              <td>{user.userName}</td> */}
              <td>
                <button className="btn btn-primary btn-sm me-2">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}
