import React, { useState } from 'react'

const Authentication = () => {
  return (
    <div>
      <Login />
      <Register />
    </div>
  )
}

export default Authentication

const Login = () => {
  return (
    <div>

    </div>
  )
}
const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [Email, setEmail] = useState('')
  const [Mobile, setMobile] = useState('')
  const [UserId, setUserId] = useState('')
  const [Password, setPassword] = useState('')

  return (
    <div className=''>

      <form>
        <h2>Register Here</h2>
        <div>
          <label htmlFor="firstname">First Name: </label>
          <input type="text" id='firstname' onChange={e => setFirstName(e.target.value)} placeholder='Enter First Name' />
        </div>
        <div>
          <label htmlFor="lasttname">Last Name: </label>
          <input type="text" id='lasttname' onChange={e => setLastName(e.target.value)} placeholder='Enter Last name Name' />
        </div>
        <div>
          <label htmlFor="useremail">User Email: </label>
          <input type="text" id='useremail' onChange={e => setEmail(e.target.value)} placeholder='Enter Email' />
        </div>
        <div>
          <label htmlFor="mobile">Mobile: </label>
          <input type="text" id='mobile' onChange={e => setMobile(e.target.value)} placeholder='Enter Mobile Number' />
        </div>
        <div>
          <label htmlFor="username">User ID: </label>
          <input type="text" id='username' onChange={e => setUserId(e.target.value)} placeholder='Enter User ID' />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id='password' onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
        </div>
        <button type='submit'>Register</button>
      </form>

    </div>
  )
}