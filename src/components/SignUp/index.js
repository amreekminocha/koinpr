import { useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

import './SignUp.scss';
import axios from '../../axios';


const SignUp = () => {

    const navigate = useNavigate();

    const [type, setType] = useState('ADVERTISER');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [errors, setErrors] = useState({});

    const cookies = new Cookies();

    const validateInput = () => {
        let error = {};
        let formIsValid = true;

        // Name
        if (fullName.length <= 3) {
            formIsValid = false;
            error.fullName = "Name must have atleast 4 characters";
        } else if (!fullName.match(/^[a-zA-Z]+$/)) {
            formIsValid = false;
            error.fullName = "Name must have letters only";
        }

        //Email
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

        // Password
        if (password.length <= 4) {
            formIsValid = false;
            error.password = "Password must have atleast 5 characters";
        } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/)) {
            formIsValid = false;
            error.password = "Password must have at least one uppercase letter, one lowercase letter, one number and one special character";
        }

        // Confirm Password
        if(cpassword.length===0){
            formIsValid = false;
            error.cpassword = "Confirm Password cannot be empty";
        }else if(cpassword!==password){
            error.cpassword = "Password and Confirm Password do not match";
        }

        setErrors(error);
        return formIsValid;
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const isValid = validateInput();
        if(!isValid){
            return;
        }

        const data = {
            fullName:fullName,
            email: email,
            password: password,
            confirmPassword: cpassword,
            userType: type
        };

        axios.post('/api/user/sign-up', data)
        .then(res=>{
            cookies.set('auth-token', res?.data?.dataToSave?.jwtToken, { path: '/' });
            navigate('/');
        }).catch(err=>{
            console.log('err',err);
        });    
    }

    return (
        <div className='signup'>
            <div className='content'>
                <div className='head'>
                    <span className='heading'>Let's Get Started</span>
                    <span className='subHeading'>Already have an account? <a href='/'>Sign In</a></span>
                </div>
                <form onSubmit={submitHandler}>
                    <div className='caard'>
                        <p>Choose Your Account Type</p>
                        <div className='inputs'>
                            <div onClick={() => setType('ADVERTISER')} className='input'>
                                <label htmlFor='adv'>I'm an advertiser</label>
                                <input type='radio' name='account' className='round' id='adv' checked={type === 'ADVERTISER'} />
                            </div>
                            <div onClick={() => setType('PUBLISHER')} className='input'>
                                <label htmlFor='pub'>I'm a publisher</label>
                                <input type='radio' name='account' className='round' id='pub' checked={type === 'PUBLISHER'} />
                            </div>
                        </div>
                    </div>
                    <div className='caard textIp'>
                        <p>Enter Your Account Details</p>
                        <div className='inputs'>
                            <div className='col'>
                                <input type='text' className={errors.fullName ? 'input-text err' : 'input-text'} placeholder='Full Name' value={fullName} onChange={e => setFullName(e.target.value)} />
                                <span className='error'>{errors.fullName}</span>
                            </div>
                            <div className='col'>
                                <input type='email' className={errors.email ? 'input-text err' : 'input-text'} placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                                <span className='error'>{errors.email}</span>
                            </div>
                        </div>
                        <div className='inputs m-t-23'>
                            <div className='col'>
                                <input type='password' className={errors.password ? 'input-text err' : 'input-text'} placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                                <span className='error'>{errors.password}</span>
                            </div>
                            <div className='col'>
                                <input type='password' className={errors.cpassword ? 'input-text err' : 'input-text'} placeholder='Confirm Password' value={cpassword} onChange={e => setCpassword(e.target.value)} />
                                <span className='error'>{errors.cpassword}</span>
                            </div>
                        </div>
                    </div>
                    <div className='proceed'>
                        <div className='tNc'>
                            <span>By proceeding you agree to Koinpr terms and conditions</span>
                        </div>
                        <button type='submit' className='submit'>Proceed</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;