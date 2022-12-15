import React from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import "./Cart.scss";
import coingate from "../assets/coinsgate.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { addToCart, subtractQuantity } from "../../redux/actions";
import Stripe from "./stripe";
import { useNavigate } from "react-router-dom";
import getStripe from "./stripe/getStripe";
const Cart = () => {
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
  };
  const handleRemoveFromCart = (item) => {
    console.log(item);
    dispatch(subtractQuantity({ id: item?.id, quantity: 1 }));
  };

  async function handleSubmit() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "10",
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
      customerEmail: "customer@email.com",
    });
    console.warn(error.message);
  }

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
                  <div onClick={() => handleAddToCart(el)} className="title">
                    <AddCircleOutlineIcon />
                  </div>
                  <div
                    onClick={() => handleRemoveFromCart(el)}
                    className="title"
                  >
                    <RemoveCircleOutlineIcon />
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
                <label>Pay via stripe</label>
                <input
                  type="radio"
                  name="payment"
                  className="ip"
                  placeholder=""
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
                  name="payment"
                  className="ip"
                  placeholder=""
                ></input>
              </div>
            </div>
            <button
              // onClick={() => navigate("/checkout")}
              onClick={handleSubmit}
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
            <div className="left">
              <div className="item">
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
              <div className="item">
                <span className="image"></span>
                <span className="title">Title</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Your cart is empty"
      )}
    </div>
  );
};

export default Cart;
