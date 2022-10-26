import React from 'react'
import './AddListing.scss'

const AddListing = () => {
    return (
        <div className='AddListing'>
            <div className='content'>
                <div className='mainHeading'>
                    Add Your Listing
                </div>
                <div className='inputs'>
                    <input type='text' placeholder='Your Website Link' className='input' />
                    <input type='text' placeholder='Offer Title' className='input' />
                </div>
                <div className='inputs'>
                    <input type='text' placeholder='Listing Category' className='input' />
                    <input type='button' className='input but' value='UploadLogo +' />
                </div>
                <div className='subHeading'>More Details</div>
                <div className='inputs'>
                    <input type='text' placeholder='Your Website Language' className='input' />
                    <input type='text' placeholder='No-Follow Links Allowed' className='input' />
                    <input type='text' placeholder='Do-Follow Links Allowed' className='input' />
                </div>
                <div className='inputs'>
                    <input type='text' placeholder='Indexed Article' className='input' />
                    <input type='text' placeholder='LinkedIn Link' className='input'/>
                    <input type='text' placeholder='Google News Visibilty' className='input'/>
                </div>
                <div className='inputs'>
                    <input type='text' placeholder='Social Share' className='input' />
                    <input type='text' placeholder='Facebook Link' className='input' />
                    <input type='text' placeholder='Twitter Link' className='input' />
                </div>
                <button type='button' className='submit'>Submit Listing</button>
            </div>
        </div>
    )
}

export default AddListing