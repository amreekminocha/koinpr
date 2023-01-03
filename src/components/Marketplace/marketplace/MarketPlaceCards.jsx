import { Avatar, Paper } from "@mui/material";
import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, subtractQuantity } from "../../../redux/actions";
import CancelIcon from '@mui/icons-material/Cancel';

function MarketPlaceCards({ name, details, image, price = 10, data }) {
  const [showAddIcon,setShowAddIcon]=useState(true)
  const[id,setId]=useState()
const cartData=useSelector((state)=>state?.cart?.products)
var cartDataId=cartData.map((el)=>el?.id)
console.log(cartDataId,id,"cart")
console.log(data,"addddd")
  //function to show details
  const navigate = useNavigate();
  const handleShowDetails = (data) => {
    // setShowData(true);
    // setShowDetailData(data);
    navigate(`/expand/${data?.offerTitle}`);
    // onClick={() => history(`/coins/${row.id}`)}
  };

  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const handleAddToCart = () => {
    console.log(cartData,data?._id,"dattatat")
    console.log(id,data?._id,"check")
    if(cartDataId?.includes(data?._id)){
      alert("Already added to the cart")
    }else{

      const payload = { id: data?._id, name, details, image, price, quantity: 1 };
      dispatch(addToCart(payload));
      setShowAddIcon(false)
      setId(data?._id)
    }
  };

  const handleRemoveFromCart = () => {
    
    
    dispatch(subtractQuantity({ id: data?._id, quantity: 1 }));
    setShowAddIcon(true)
  };
  return (
    <>
      <div
        style={{
          width: "282px",
          height: "167px",
          background: "#F8F8F8",
          padding: "1em",
          marginBottom:"30px"
        }}
      >
        <span onClick={() => handleShowDetails(data)}>
          <div style={{ display: "flex", marginTop: "22px" }}>
            <Avatar>{image}</Avatar>
            <div
              style={{
                marginTop: "0.4em",
                marginLeft: "12px",
                fontSize: "15px",
                fontWeight: 600,
              }}
            >
              {name}
            </div>
          </div>

          <div
            style={{
              marginTop: "34px",
              color: "#4E4D4D",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            {details}
          </div>
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          <p>${price}</p>
          {/* {console.log(data?._id===cartData?.id)} */}
          <span onClick={!cartDataId?.includes(data?._id)?handleAddToCart:handleRemoveFromCart}>
            {/* <span style={{border:"1px solid red"}}>{id===data?._id?"yes":"no"}</span> */}
            {!cartDataId?.includes(data?._id) ?<AddCircleOutlineIcon />:<CancelIcon/>}
          </span>
        </div>
      </div>
    </>
  );
}

export default MarketPlaceCards;
