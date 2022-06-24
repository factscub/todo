import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import '../../Assets/Styles/SignUp/SignUp.css'

export default function SignUp() {
  const [userName, setUserName]= useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]=useState('')
  const [sup,setSup]=useState(false)
  
const navigate = useNavigate()


  const handleSubmit=(e)=>{
    e.preventDefault()
 if(userName!=='' && email!==''&&password!==''){

  const data = {userName, email, password}
  axios.post('http://localhost:3001/signup',data).then(d=>{
    if(d.status===200){
      navigate('/login')
    }
    if (d.status===201) {

        console.log(d.data)
    }

  })

 }
 
  }
   
  return (
    <div className='login'>
    <form onSubmit={(e)=>handleSubmit(e)}>
       <label htmlFor='username'>Username</label>
       <input type='text' placeholder='username' id='username' value={userName} onChange={(e)=>setUserName(e.target.value)} />
       <label htmlFor='email'>Email</label>
       <input type='text' placeholder='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
       <label htmlFor='password'>Password</label>
       <input type='password' placeholder='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
       <button>Register</button>
   </form>
  </div>
  )
}
