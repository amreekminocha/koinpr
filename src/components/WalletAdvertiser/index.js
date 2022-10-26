import './WalletAdvertiser.scss';

import React from 'react'

const WalletAdvertiser = () => {
    return (
        <div className='WalletAdvertiser'>
            <div className='content'>
                <div className='heading'>Order History</div>
                <div className='table'>
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

export default WalletAdvertiser;