import { Paper } from '@mui/material'
import React from 'react'
import order from  "../../../assets/order.png"
function OrderSuccess() {
  return (
    <Paper  elevation={3}style={{display:"flex"}}>
        <Paper sx={{marginTop:"100px"}} >
          <h1 style={{width:"250px",margin:"auto",textAlign:"center"}}>

            Your order is successfully created you ll recieve the order details soon
          </h1>
        </Paper>
        <div>
          <img src={order}/>
        </div>
    </Paper>
  )
}

export default OrderSuccess