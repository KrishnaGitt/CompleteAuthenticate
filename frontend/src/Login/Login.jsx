import React, { useState } from 'react'
import "./Login.css"

const Register = () => {
    const [login,setLogin]=useState({
        email:"",
        password:"",
        confirmpassword:""
    })
    const handleOnChange=(e)=>{
        setLogin((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
        console.log("handle-->",login)
    }
  return (
    <>
    <div className='main'>
    <h1 className='register'>Login Form</h1>
        <form>
            <div className='email-div'>
            <div className='text'>Email</div>
                <input type='email' className="input-field-radius email div-width" placeholder='Enter you Email'  name='email' onChange={handleOnChange}/>
            </div>
            <div className='password-div'>
            <div className='text'>Password</div>
                <input type='password'  placeholder='Enter you password' className='password input-field-radius div-width' name='password' onChange={handleOnChange}/>
                <input type='password'placeholder='Conform your password' className='confirmpassword input-field-radius div-width' name='confirmpassword' onChange={handleOnChange}/>
            </div>
            <div className='submit-div'>
                <button className='btn'>Login</button>
            </div>
        </form>
    </div>
</>
  )
}

export default Register