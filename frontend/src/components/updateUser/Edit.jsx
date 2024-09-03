import React from 'react'
import "../addUser/add.css";

export default function Edit() {
  return (
    <div>
       <h3>Update User</h3>
      <form className='addUserForm' >
            <div className="inputGroup">
                <label htmlFor="fname">First name</label>
                <input type="text" id="fname" name="fname" autoComplete='off' placeholder='First name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last name</label>
                <input type="text" id="lname" name="lname" autoComplete='off' placeholder='Last name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" autoComplete='off' placeholder='Email' />
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE USER</button>
            </div>
        </form>
    </div>
  )
}
