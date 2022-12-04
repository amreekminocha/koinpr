import { Avatar, Paper } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function MarketPlaceCards({name,details,image,price}) {
  return (
    <>
    <Paper 
    sx={{width:"282px",height:"167px",background:"#F8F8F8",padding:"1em",}}
    >
        <div style={{display:"flex",marginTop:"22px"}}>

<Avatar>
    {image}
</Avatar>
<div style={{marginTop:"0.4em",marginLeft:"12px",fontSize:"15px",fontWeight:600}}>{name}</div>
        </div>

        <div style={{marginTop:"34px",color:"#4E4D4D",fontSize:"12px",fontWeight:500}}>
            {details}
        </div>
        <div style={{display:"flex",justifyContent:"space-between",fontWeight:600,fontSize:"16px"}}>
<p>
    ${price}
</p>
<AddCircleOutlineIcon />

            </div>
    </Paper>
    </>
  )
}

export default MarketPlaceCards