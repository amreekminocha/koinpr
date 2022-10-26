import './WalletPublisher.scss';

import React from 'react'

const WalletPublisher = () => {
  return (
    <div className='WalletPublisher'>
        <div className='head'>
            <div className='left'>
                Current Wallet Balance : $5 
            </div>
            <div className='right'>
                Pending Withdrawl : $20
            </div>
        </div>
        <div className='content'>
            <div className='cLeft'>
                <div className='mainHeading'>
                    Withdraw Funds
                </div>
                <div className='subHeading'>
                    Please enter the amount
                </div>
                <input className='wInput' type='text' placeholder='Enter Withdrawl Amount'></input>
                <div className='subHeading sub1'>
                    Choose your payment method
                </div>
                <div className='wInput'>
                    <label htmlFor='bankTransfer'>Bank Transfer</label>
                    <input type='radio' name='method' value='bankTransfer' id='bankTransfer'></input>
                    </div>
                <div className='wInput method'>
                <label htmlFor='bankTransfer'>Cryptocurrency</label>
                    <input type='radio' name='method' value='crypto' id='crypto'></input>    
                </div>
                <button className='proceed'>Proceed</button>
            </div>
            <div className='cRight'>
                <div className='mainHeading'>
                    Wallet History
                </div>
                <table className='walletTable'>
                    <tr>
                        <th>Date</th>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                    <tr>
                        <td>12 Aug, 2022</td>
                        <td>2313421</td>
                        <td>Paid for orders</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>12 Aug, 2022</td>
                        <td>2313421</td>
                        <td>Added wallet balance</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>12 Aug, 2022</td>
                        <td>2313421</td>
                        <td>Added wallet balance</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>12 Aug, 2022</td>
                        <td>2313421</td>
                        <td>Added wallet balance</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>12 Aug, 2022</td>
                        <td>2313421</td>
                        <td>Added wallet balance</td>
                        <td>$10</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  )
}

export default WalletPublisher;