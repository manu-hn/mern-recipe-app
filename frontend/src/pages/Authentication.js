import React, { useState } from 'react';
import axios from "axios";
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom'

const Authentication = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='flex justify-center w-[100%] border h-[25em] items-center'>

      <div className='bg-yellow-400 b border border-black w-[25%] flex justify-center text-center m-[5%]'>
        <Login />
      </div>
      <div className='bg-sky-400 w-[30%] flex justify-center text-center'>
        <Register />
      </div>
    </div>
  )
}

export default Authentication

const Login = () => {
 const [username, setUserName]= useState('')
 const [password, setPassword]= useState('')
 const [_, setCookie, ]=useCookies('access_token');
 const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

     const userLogin={
      username, password
    };
    console.log(userLogin)
    const user=await axios.post('http://localhost:5000/api/recipe/login', userLogin);

    setCookie('access_token', user?.data?.token);
    window.localStorage.setItem('userID', user?.data?.data?.userId);
    navigate('/');
    console.log(user)
  
  }

  return (
    <div>
      <form action="" onSubmit={(e)=>handleLogin(e)}>
        <h2>Login</h2>
        <div className='m-[1em]'>
          <label htmlFor="userName" >UserName : </label>
          <input type="text" id='username' onChange={(e)=>setUserName(e.target.value)} placeholder='Enter username or email' className='bg-transparent placeholder:text-white px-4 border' />

        </div>
        <div className='m-[1em]'>
          <label htmlFor="password" >Password : </label>
          <input type="text" id='password' onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' className='bg-transparent placeholder:text-white border px-4' />

        </div>
        <button type='submit' className=''>Login</button>
      </form>

    </div>
  )
}
const Register = () => {
  const [status, setStatus] = useState('');

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    const userRegistration = {
      firstName, lastName, email, mobile, username, password
    }
    const data = await axios.post('http://localhost:5000/api/recipe/register', userRegistration)
    console.log(userRegistration)
    console.log(data)

    setStatus(data.data.message)
    setTimeout(() => {
      setStatus("")
    }, 3000)

  }

  return (
    <div className=''>

      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Register Here</h2>
        <div className='m-[1em]'>
          <label htmlFor="firstname">First Name: </label>
          <input type="text" id='firstname' onChange={e => setFirstName(e.target.value)} placeholder='Enter First Name' className='bg-transparent placeholder:text-white px-4 border' />
        </div>
        <div className='m-[1em]'>
          <label htmlFor="lasttname">Last Name: </label>
          <input type="text" id='lastname' onChange={e => setLastName(e.target.value)} placeholder='Enter Last name Name' className='bg-transparent placeholder:text-white px-4 border' />
        </div>
        <div className='m-[1em]'>
          <label htmlFor="useremail">User Email: </label>
          <input type="text" id='useremail' onChange={e => setEmail(e.target.value)} placeholder='Enter Email' className='bg-transparent placeholder:text-white px-4 border' />
        </div>
        <div className='m-[1em]'>
          <label htmlFor="mobile">Mobile: </label>
          <input type="text" id='mobile' onChange={e => setMobile(e.target.value)} placeholder='Enter Mobile Number' className='bg-transparent placeholder:text-white px-4 border' />
        </div>
        <div className='m-[1em]'>
          <label htmlFor="username">User ID: </label>
          <input type="text" id='username' onChange={e => setUserName(e.target.value)} placeholder='Enter User ID' className='bg-transparent placeholder:text-white px-4 border' />
        </div>
        <div className='m-[1em]'>
          <label htmlFor="password">Password: </label>
          <input type="password" id='password' onChange={e => setPassword(e.target.value)} placeholder='Enter Password' className='bg-transparent placeholder:text-white px-4 border' />
        </div>
        <button type='submit' >Register</button>


      </form>
      <h1>{status}</h1>

    </div>
  )
}