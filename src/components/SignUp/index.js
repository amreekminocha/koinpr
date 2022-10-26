import './SignUp.scss';

const SignUp = () => {
    return (
        <div className='signup'>
            <div className='content'>
                <div className='head'>
                    <span className='heading'>Let's Get Started</span>
                    <span className='subHeading'>Already have an account? <a href='/'>Sign In</a></span>
                </div>
                <div className='caard'>
                    <p>Choose Your Account Type</p>
                    <div className='inputs'>
                        <div className='input'>
                            <label htmlFor='adv'>I'm an advertiser</label>
                            <input type='radio' name='account' className='round' id='adv'/>
                        </div>
                        <div className='input'>
                            <label htmlFor='pub'>I'm a publisher</label>
                            <input type='radio' name='account' className='round' id='pub'/>
                        </div>
                    </div>
                </div>
                <div className='caard textIp'>
                    <p>Enter Your Account Details</p>
                    <div className='inputs'>
                        <input type='text' className='input-text' placeholder='Full Name' />
                        <input type='text' className='input-text' placeholder='Email' />
                    </div>
                    <div className='inputs m-t-23'>
                        <input type='text' className='input-text' placeholder='Password' />
                        <input type='text' className='input-text' placeholder='Confirm Password' />
                    </div>
                </div>
                <div className='proceed'>
                    <div className='tNc'>
                        <span>By proceeding you agree to Koinpr terms and conditions</span>
                    </div>
                    <button type='submit' className='submit'>Proceed</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;