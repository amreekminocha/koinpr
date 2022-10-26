import React from 'react';

import './Cart.scss';

const Cart = () => {
  return (
    <div className='Cart'>
        <h2>Cart</h2>
        <div className='content'>
            <div className='left'>
                <div className='item'>
                    <span className='image'></span>
                    <span className='title'>Title</span>
                </div>
                <div className='item'>
                    <span className='image'></span>
                    <span className='title'>Title</span>
                </div>
                <div className='item'>
                    <span className='image'></span>
                    <span className='title'>Title</span>
                </div>
                <div className='item'>
                    <span className='image'></span>
                    <span className='title'>Title</span>
                </div>
            </div>
            <div className='right'>
                <div className='title'>Checkout</div>
                <div className='amount'>Total : 40$</div>
                <div className='inputs'>
                    <div className='input'>
                        <label>Pay via stripe</label>
                        <input type='radio' name='payment' className='ip' placeholder=''></input>
                    </div>
                    <div className='input'>
                        <label>Pay via coingate</label>
                        <input type='radio' name='payment' className='ip' placeholder=''></input>
                    </div>
                </div>
                <button type='button' className='placeOrd'>Place Order</button>
            </div>
        </div>
    </div>
  );
};

export default Cart;