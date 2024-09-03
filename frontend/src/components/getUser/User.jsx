import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function User() {
  return (
    <div>
      <Link to="/create">Add User</Link> {/* Correct usage of Link */}
      <div className="container mt-5">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>SNO</th>
            <th>EMAIL</th>
            <th>USER NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
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
