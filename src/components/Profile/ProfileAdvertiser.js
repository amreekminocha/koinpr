import React from 'react';
import './Profile.scss';

const ProfileAdvertiser = () => {
    return (
        <div className='Profile'>
            <div className='pLeft'>
                <h2 className='lHead'>Account Details</h2>
                <p className='cStatus'>Current Status : <span className='status'>Not Verified</span></p>
                <div className='inputs mt40'>
                    <div className='wInput'>
                        <label>Identification Details</label>
                        <input type='radio'></input>
                    </div>
                    <div className='wInput mt20'>
                        <label>Identification Details</label>
                        <input type='radio'></input>
                    </div>
                </div>
            </div>
            <div className='pRight'>
                <h2 className='pHeading'>Identification Details</h2>
                <p className='cStatus mt15'>Your details will be used for billing and generating invoice</p>
                <div className='inputs'>
                    <div className='wInput mt40'>
                        <label>I represent a company</label>
                        <input type='radio'></input>
                    </div>
                </div>
                <p className='cStatus mt40'>Enter your details</p>
                <div className='inputs df mt25'>
                    <div className='wInput'>First Name</div>
                    <div className='wInput'>Last Name</div>
                </div>
                <div className='inputs df mt25'>
                    <div className='wInput'>Country of Residence</div>
                    <div className='wInput'>Address</div>
                </div>
                <button type='button' className='pButton mt40'>Proceed</button>
                <p className='pBottom'>Please make sure that the details you enter here matches the documents you will be providing for verification.</p>
            </div>
        </div>
    )
}

export default ProfileAdvertiser