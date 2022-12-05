import React from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import "./Cart.scss";
import coingate from "../assets/coinsgate.png";
const Cart = () => {
  return (
    <div className="Cart">
      <div className="hidden md:block">
        <h2>Cart</h2>
      </div>
      <div className="content">
        <div className="hidden md:block">
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

        <div className="right">
          <div className="title">Checkout</div>
          <div className="amount">Total : 40$</div>
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
          <button type="button" className="placeOrd">
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
    </div>
  );
};

export default Cart;
