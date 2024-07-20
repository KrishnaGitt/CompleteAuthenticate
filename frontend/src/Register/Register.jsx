import React from 'react'
import "./Register.css"

const Register = () => {
  return (
    <>
    <div className='register'><h1>Registration form</h1></div>
    <div className='main'>
        <form>
            <div className='name-div'>
                <h1 className='text'>Name</h1>
                <input type='text' name='firstName' placeholder='Enter your first name' className='firstName'/>
                <input type='text' name='lastName' placeholder='Enter your last name' className='lastName'/>
            </div>
            <div className='age-div'>
                <h1 className='text'>Age</h1>
                <input type='number' name='age' placeholder='Enter your age' className='age'/>
            </div>
            <div className='gender-div'>
                <h1 className='text'>Gender</h1>
                <select name='gender'> 
                    <option >Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
            <div className='email-div'>
                <h1 className='text'>Email</h1>
                <input type='email'placeholder='Enter you Email' className='email' name='name'/>
            </div>
            <div className='phone-div'>
                <h1 className='text'>Phone</h1>
                <input type='number'placeholder='Enter you Number' className='phone' name='phone'/>
            </div>
            <div className='password-div'>
                <h1 className='text'>Password</h1>
                <input type='password'placeholder='Enter you password' className='password' name='password'/>
                <input type='password'placeholder='Conform your password' className='confirmpassword' name='confirmpassword'/>
            </div>
            <div className='checkbox'>
                <input type='checkbox' className='checkbox'/>
                <span>I accept the term and condition</span>
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