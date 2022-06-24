import React, { useState } from 'react'
import '../../Assets/Styles/Login/Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login () {
  const [userName, setUserName]=useState('')
  const [password, setPassword]=useState('')
const navigate=useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()

    const data = {userName,password}
    axios.post('http://localhost:3001/login',data).then(d=>{
      if(!d.data){console.log('Invalid username or password.')}
      else{console.log('Login successfull.')
        window.localStorage.setItem("userData",JSON.stringify(d.data))
   navigate('/')
    }
    })
  }
  return (
   <div className='login'>
     <form onSubmit={(e)=>{
      handleLogin(e)
     }}>
        <label htmlFor='username'>Username</label>
        <input type='text' placeholder='username' id='username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type='submit'>Login</button>
    </form>
   </div>
  )
}

