import {useNavigate} from 'react-router-dom'
import React, { useState, useContext } from 'react'
// import NoteContext from '../context/notes/noteContext'

const Login = () => {
  // const context = useContext(NoteContext);
  // const {showalert} = context;
    const [credentials, setCredentials] = useState({email:'' , password:''})
  //   let navigate = useNavigate();

    const onChange = (e) => {
        setCredentials({...credentials , [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const response = await fetch(`http://localhost:4000/api/auth/login`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     }, 
        //     body: JSON.stringify({email:credentials.email ,password: credentials.password}),
        //   });
        //   const json = await response.json()
        //   if(json.success){
        //     localStorage.setItem('token', json.authtoken)    
        //     navigate('/')
        //     showalert('Login successfully','success')
        //   }
        //   else{
        //     showalert("Login Denide", 'danger')
        //   }
    }
  return (
    <>
      <h2 className='container my-2' >Login to continue Property Marketplace</h2>
      <form className='container' onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={credentials.email} onChange={onChange} name="email" placeholder='email' aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} placeholder='password' name="password" />
        </div>
        <div style={{paddingBottom: 373}}>
          <button type="submit"  className="btn btn-dark my-2" >Login</button>
        </div>
      </form>
    </>
  )
}

export default Login