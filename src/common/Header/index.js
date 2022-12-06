import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "../../axios";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import "./Header.scss";
import MobileHeader from "./headerMobile/MobileHeader";
import { useSelector } from "react-redux";

const Header = () => {
  const cookies = new Cookies();

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState();

  const [isOpenAcc, setIsOpenAcc] = useState(false);

  useEffect(() => {
    const auth = cookies.get("auth-token");
    if (!auth) {
      setIsLoggedIn(false);
      return;
    }
    axios
      .post(
        "/api/user/get-user-by-token",
        {},
        {
          headers: {
            Authorization: "Bearer " + auth,
          },
        }
      )
      .then((res) => {
        if (!res.data.success) {
          setIsLoggedIn(false);
          return;
        }
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  });

  const signOutHandler = () => {
    cookies.remove("auth-token");
    navigate("/sign-in");
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const cartNumber = useSelector((state) => state?.cart?.total);
  return (
    <>
      <div className="hidden md:block lg:block">
        <div className="Header" onClick={() => setIsOpenAcc(false)}>
          <div className="left" onClick={() => navigate("/")}>
            <span className="heading">Koinpr</span>
            <span className="subHeading">
              A <b>Todayq</b> Product
            </span>
          </div>
          <div className="right">
            <span onClick={() => navigate("/")}>Publishers</span>
            <span
              className="myAccount"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpenAcc(!isOpenAcc);
              }}
            >
              My Account
              {isOpenAcc && (
                <div className="dropdown">
                  <span onClick={() => navigate("/profile")}>My Profile</span>
                  <span>Order History</span>
                  <span>Telegram</span>
                </div>
              )}
            </span>
            <IconButton onClick={() => navigate("/cart")} aria-label="cart">
              <StyledBadge badgeContent={cartNumber} color="primary">
                <ShoppingCartIcon sx={{ color: "white" }} />
              </StyledBadge>
            </IconButton>
            <span onClick={signOutHandler}>
              {isLoggedIn ? "Sign Out" : "Sign-In"}
            </span>
          </div>
        </div>
      </div>

      <div className="md:hidden lg:hidden sm:block">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
