import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from '../../axios';
import './SignIn.scss'

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState({});

    const cookies = new Cookies();
    const navigate = useNavigate();

    const validateInput = () =>{
        
        let error = {};
        let formIsValid = true;
        
        if (email.length === 0) {
            formIsValid = false;
            error.email = "Email cannot be empty";
        } else {
            let lastAtPos = email.lastIndexOf("@");
            let lastDotPos = email.lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    email.indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    email.length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                error.email = "Email is not Valid";
            }
        }
        setErrors(error);
        return formIsValid;
    }

    const submitHandler = e =>{
        e.preventDefault();
        if(!validateInput()){
            return;
        }
        const data = {
            email: email,
            password: password
        };

        axios.post('/api/user/login', data)
        .then(res=>{
            if(res?.data?.success){
                cookies.set('auth-token', res?.data?.user?.token, { path: '/' });
                navigate('/');
            }else{
                console.log('error', res);
            }
        }).catch(err=>{
            console.log('err', err);
        });    
    };

    return (
        <div className='signin'>
            <div className='content'>
                <form onSubmit={submitHandler}>
                    <p className='chead'>Sign In</p>
                    <p className='signUp'>Don't have an account? <a href='/sign-up'>Sign up</a></p>
                    <input type='email' placeholder='Email Id' value={email} onChange={e=>setEmail(e.target.value)} className={`email ${errors.email && 'err'}`} />
                    <span className='error'>{errors.email}</span>
                    <input type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)} className='password' />
                    <button className={`submitButton`} type='submit' >Sign In</button>
                </form>
                <a href='/' className='forgot'>Forgot password?</a>
            </div>
        </div>
    )
}
 
export default SignIn