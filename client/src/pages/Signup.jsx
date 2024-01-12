import {useNavigate} from 'react-router-dom'
import React, { useState, useContext } from 'react'
// import NoteContext from '../context/notes/noteContext'

const Signup = () => {

    // const context = useContext(NoteContext);
    // const {showalert} = context;

    const [credentials, setCredentials] = useState({name: '', email:'' , password:'', cpassword:''})
    // let navigate = useNavigate();
 
    const onChange = (e) => {
        setCredentials({...credentials , [e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // const {name , email , password} = credentials;
        // const response = await fetch(`http://localhost:4000/api/auth/createuser`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     }, 
        //     body: JSON.stringify({name, email , password}),
        //   });
        //   const json = await response.json() 
        //   if(json.success){
        //     localStorage.setItem('token', json.authtoken)    
        //     navigate('/')
        //     showalert('Account create successfully','success')
        //   }
        //   else{
        //     showalert('Please try to login with New email','warning')
        //   }
    }
  return (
    <>
    <h2 className='container my-2 '>Create account to use Property Marketplace</h2>
    <div className="container my-2">
        <form className='container' onSubmit={handleSubmit} >
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" onChange={onChange} name="name" placeholder='name' aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" onChange={onChange} name="email" placeholder='email' aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password"  onChange={onChange} placeholder='Conform password' name="password"  minLength={5} required />
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Conform  Password</label>
            <input type="password" className="form-control" id="cpassword"  onChange={onChange} placeholder='password' name="cpassword"  minLength={5} required />
        </div>
        <div style={{paddingBottom: 209}}>
        <button type="submit" className="btn btn-dark">Create Account</button>
        </div>
        </form>  
    </div>
    </>
  )
}

export default Signup