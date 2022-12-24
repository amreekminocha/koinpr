import React from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import "./Cart.scss";
import coingate from "../assets/coinsgate.png";
import stripe from "../assets/stripe.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { addToCart, orderDetails, subtractQuantity } from "../../redux/actions";
import CancelIcon from "@mui/icons-material/Cancel";

// import Stripe from "./stripe";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [showAddIcon, setShowAddIcon] = useState(true);
  const [showProduct, setShowProduct] = useState(true);
  // const [userData, setUserData] = useState();
  // const [userId, setUserId] = useState();


  // useEffect(() => {
  //   const auth = cookies.get("auth-token");
  //   console.log(auth);
  //   if (!auth) {
  //     navigate("/sign-in");
  //   }
  //   axios
  //     .post(
  //       "/api/user/get-user-by-token",
  //       {},
  //       {
  //         headers: {
  //           Authorization: "Bearer " + auth,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       if (!res.data.success) {
  //         navigate("/sign-in");
  //       }
  //       setUserId(res.data.user._id);
  //       setUserData(res?.data?.user)
  //     })
  //     .catch((err) => {
  //       console.log(err, "err");
  //       navigate("/sign-in");
  //     });
  //   // UserAuthentication();
  // }, [userId]);


  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const navigate = useNavigate();
  const cartData = useSelector((state) => state?.cart?.products);
  console.log(cartData, "cartData");
  let cartDataArray = [];
  console.log(cartDataArray, "cartDataArray");

  for (let i in cartData) {
    cartDataArray.push(cartData[i]);
  }
  const totalPrice = cartDataArray.map((el) => el.price * el.quantity);
  var finalprice = 0;
  for (let i = 0; i < totalPrice.length; i++) {
    finalprice += totalPrice[i];
  }

  const dispatch = useDispatch();
  const handleAddToCart = (data) => {
    const payload = {
      id: data?._id,
      name: data?.name,
      details: data?.details,
      image: data?.image,
      price: data?.price,
      quantity: 1,
    };
    dispatch(addToCart(payload));
    setShowAddIcon(false);
  };
  const handleRemoveFromCart = (item) => {
    console.log(item);
    dispatch(subtractQuantity({ id: item?.id, quantity: 1 }));
    setShowAddIcon(true);
    setShowProduct(false)
    const filteredData=cartDataArray.map(el=>el?.id!=item?.id)
    cartDataArray.push(filteredData)
  };

  const handleCheckoutStripe = () => {

    axios
      .post(`http://localhost:5000/api/stripe/create-checkout-session`, {
        cartItems: cartDataArray,
        userId: 123,
      })
      .then((response) => {
        console.log(response, "res");
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));


  };

  const handleCheckoutCoingate = () => {
    alert(
      "we are working on coingate payment method,Please choose stripe for now"
    );
  };
  return (
    <div className="Cart">
      <div className="hidden md:block">
        <h2>Cart</h2>
      </div>
      {cartDataArray.length > 0 ? (
        <div className="content">
          <div className="hidden md:block">
            {cartDataArray?.map((el) => (
              <div key={el?.id} className="left">
                
                <div className="item">
                  <span className="image">
                    <img src={el.image} alt={el.name} />
                  </span>
                  <span className="title">{el.name}</span>
                  <span className="title">${el.price}</span>
                  <div onClick={() => handleRemoveFromCart(el)} className="title">
                    {<CancelIcon/>}
                  </div>

                  {/* <Stripe/> */}
                </div>
              </div>
            ))}
          </div>

          <div className="right">
            <div className="title">Checkout</div>
            <div className="amount">Total : {finalprice}$</div>
            <div className="inputs">
              <div className="input">
                <label>Pay via stripe
                </label>

                <span>
                  <img src={stripe} alt="stripe" />
                </span>
                <input
                  type="radio"
                  value="stripe"
                  name="paymentMethod"
                  className="ip"
                  placeholder=""
                  onChange={handleChange}
                  checked={paymentMethod === "stripe"}
                ></input>
              </div>
              <div className="input">
                <span>
                  <label>
                    Pay via{" "}
                    {/* <span style={{ color: "blue" }}>
                  <AllInclusiveIcon />
                </span>
                coingate */}
                  </label>
                </span>

                <span>
                  <img src={coingate} alt="coingate" />
                </span>
                <input
                  type="radio"
                  name="paymentMethod"
                  className="ip"
                  value="coingate"
                  placeholder=""
                  onChange={handleChange}
                  checked={paymentMethod === "coingate"}
                ></input>
              </div>
            </div>
            <button
              // onClick={() => navigate("/checkout")}
              onClick={
                paymentMethod === "stripe"
                  ? handleCheckoutStripe
                  : handleCheckoutCoingate
              }
              type="button"
              className="placeOrd"
            >
              Place Order
            </button>
          </div>
          <div className="sm:block md:hidden">
            <div className="md:hidden sm:block">
              <h2 className="cart">Cart</h2>
            </div>
              {cartDataArray?.map((el)=>(

            <div className="left">
              <div className="item">
              <span className="image">
                    <img src={el.image} alt={el.name} />
                  </span>
                  <span className="title">{el.name}</span>
                  <span className="price">${el.price}</span>
                  <div onClick={() => handleRemoveFromCart(el)} className="title">
                    {<CancelIcon/>}
                  </div>
              </div>
              </div>
              ))}
              {/* <div className="item">
                <span className="image"></span>
                <span className="title">Title</span>
              </div>
              <div className="item">
                <span className="image"></span>
                <span className="title">Title</span>
              </div>
              <div className="item">
                <span className="image"></span>
                <span className="title">Title</span>
              </div>
            </div> */}
          </div>
        </div>
      ) : (
        "Your cart is empty"
      )}
    </div>
  );
};

export default Cart;
