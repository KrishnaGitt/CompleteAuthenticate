import React, { useState } from 'react'
import axios from "axios"
import "./Register.css"
import LoginSlice from "../Redux/Slice/LoginSlice";
import{useDispatch} from "react-redux"

const Register = () => {
    const dispatch =useDispatch()
    const [registor,setRegistor]=useState({
        firstName:"",
        lastName:"",
        age:"",
        email:"",
        phone:"",
        password:"",
        confirmpassword:""
    })
    const handleOnChange=(e)=>{
        setRegistor((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
        console.log("handle-->",registor)
    }
    const handleSubmitButton=async(e)=>{
      const   {firstName,
            lastName,
            age,
            email,
            phone,
            password,
            confirmpassword}=registor;
        // await axios.post('/api/user/registor',registor)
        e.preventDefault();

        dispatch(LoginSlice({
            firstName,
            lastName,
            age,
            email,
            phone,
            password,
            confirmpassword
        }))

    }
  return (
    <>
    <div className='main'>
    <h1 className='register'>Registration form</h1>
        <form className='form' onSubmit={handleSubmitButton}>
            <div className='name-div'>
                <div className='text'>Name</div>
                <input type='text' className="input-field-radius firstName div-width" name='firstName' placeholder='Enter your first name' onChange={handleOnChange}/>
                <input type='text' name='lastName' placeholder='Enter your last name' className='input-field-radius lastName div-width' onChange={handleOnChange}/>
            </div>
            <div className='age-div'>
            <div className='text'>Age</div>
                <input type='number' className="input-field-radius age div-width" name='age' placeholder='Enter your age' onChange={handleOnChange}/>
            </div>
            <div className='gender-div'>
            <div className='text'>Gender</div>
                <select name='gender' className='input-field-radius div-width'> 
                    <option >Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
            <div className='email-div'>
            <div className='text'>Email</div>
                <input type='email' className="input-field-radius email div-width" placeholder='Enter you Email'  name='email' onChange={handleOnChange}/>
            </div>
            <div className='phone-div'>
            <div className='text'>Phone</div>
                <input type='number'placeholder='Enter you Number' className='phone input-field-radius div-width' name='phone' onChange={handleOnChange}/>
            </div>
            <div className='password-div'>
            <div className='text'>Password</div>
                <input type='password'  placeholder='Enter you password' className='password input-field-radius div-width' name='password' onChange={handleOnChange}/>
                <input type='password'placeholder='Conform your password' className='confirmpassword input-field-radius div-width' name='confirmpassword' onChange={handleOnChange}/>
            </div>
            <div className='checkbox'>
                <input type='checkbox' className='checkbox'/>
                <span className='checkbox-text'>I accept the term and condition</span>
            </div>
            <div className='submit-div'>
                <button className='btn'>Register</button>
            </div>
        </form>
    </div>
</>
  )
}

export default Register