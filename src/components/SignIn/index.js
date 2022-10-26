import React from 'react'
import './SignIn.scss'

const SignIn = () => {
    return (
        <div className='signin'>
            <div className='content'>
                <p className='chead'>Sign In</p>
                <p className='signUp'>Don't have an account? <a href='/'>Sign up</a></p>
                <input type='text' placeholder='Email Id' className='email' />
                <input type='password' placeholder='Password' className='password' />
                <button className='submitButton' type='submit'>Sign In</button>
                <a href='/' className='forgot'>Forgot password?</a>
            </div>
        </div>
    )
}
 
export default SignIn