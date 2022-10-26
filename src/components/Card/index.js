import React from 'react';

import './Card.scss';

const Card = (props) => {
  return (
    <div className='card'>
        <div className='cardHead'>
            <span className='image'></span>
            <span className='name'>{props.name}</span>
        </div>
        <div className='cardBottom'>
            <div className='cardLeft'>
                <span className='details'>View Details</span>
                <span className='price'>{`$${props.price}`}</span>
            </div>
            <div className='cardRight'>
                <span>+</span>
            </div>
        </div>
    </div>
  )
}

export default Card;