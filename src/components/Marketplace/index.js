import React from 'react';
import Card from '../Card';

import './Marketplace.scss'

const Marketplace = () => {
  return (
    <div className='marketplace'>
        <div className='panels'>
            <div className='mpLeft'>
                <div className='publishers'>
                    <span>Search Publishers</span>
                    <input type='search' name='psearch' placeholder='Enter publisher name'/>
                </div>
                <div className='publishers'>
                    <span>Choose Category</span>
                    <div className='option'>
                        <label htmlFor='pressRelease'>Press Release</label>
                        <input type='radio' name='category' id='pressRelease' value='pressRelease' />
                    </div>
                    <div className='option'>
                        <label htmlFor='sponsoredArticles'>Sponsored Articles</label>
                        <input type='radio' name='category' id='sponsoredArticles' value='sponsoredArticles' />
                    </div>
                    <div className='option'>
                        <label htmlFor='button'>Button Ads</label>
                        <input type='radio' name='category' id='button' value='buttonAds' />
                    </div>
                    <div className='option'>
                        <label htmlFor='banner'>Banner Ads</label>
                        <input type='radio' name='category' id='banner' value='bannerAds' />
                    </div>
                    {/* <div className='option'>
                        {/* <label htmlFor='bannerAds'>Banner Ads</label> */}
                        {/* <input type='radio' name='category' id='bannerAds' value='bannerAds' /> */}
                    {/* </div> */}
                </div>
            </div>
            <div className='mpRight'>
                <div className='row'>
                    <Card name='Todayq News' price='500'/>
                    <Card name='Amreek' price='Infinity'/>
                    <Card name='Todayq News' price='500'/>
                </div>
                <div className='row'>
                    <Card name='Todayq News' price='500'/>
                    <Card name='Todayq News' price='500'/>
                    <Card name='Todayq News' price='500'/>
                </div>
                <div className='row'>
                    <Card name='Todayq News' price='500'/>
                    <Card name='Todayq News' price='500'/>
                    <Card name='Todayq News' price='500'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Marketplace;