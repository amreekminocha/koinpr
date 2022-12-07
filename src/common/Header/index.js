import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "../../axios";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import "./Header.scss";
import MobileHeader from "./headerMobile/MobileHeader";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

import { useSelector } from "react-redux";
import {
  Avatar,
  Box,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { AlertDialog } from "../alertDialogue/AlertDialog";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Header = () => {
  const cookies = new Cookies();

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [isOpenAcc, setIsOpenAcc] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

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

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const cartNumber = useSelector((state) => state?.cart?.total);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const signOutHandler = () => {
    cookies.remove("auth-token");
    handleSignout();
    navigate("/sign-in");
    // setOpen(true);
    setAnchorElUser(null);
  };

  const handleSignout = (event) => {
    setOpen(true);
  };
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
            <span style={{marginTop:"7px"}} onClick={() => navigate("/")}>Publishers</span>
            {/* <span
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
            </span> */}
            <IconButton onClick={() => navigate("/cart")} aria-label="cart">
              <StyledBadge badgeContent={cartNumber} color="primary">
                <ShoppingCartIcon sx={{ color: "white" }} />
              </StyledBadge>
            </IconButton>
            {/* <span onClick={signOutHandler}>
              {isLoggedIn ? "Sign Out" : "Sign-In"}
            </span> */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">My Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Order History</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Telegram</Typography>
                </MenuItem>
                <MenuItem onClick={signOutHandler}>
                  <Typography textAlign="center">
                    {isLoggedIn ? (
                      <span onClick={handleSignout}>Sign Out</span>
                    ) : (
                      "Sign-In"
                    )}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </div>
        </div>
      </div>
      <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Slide in alert dialog
        </Button> */}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle variant="h4">{"Attention Please !!"}</DialogTitle>
          <div style={{ textAlign: "center" }}>
            <ReportProblemIcon sx={{ fontSize: "50px" }} />
          </div>
          <DialogContent>
            <DialogContentText variant="h5" id="alert-dialog-slide-description">
              Dou you want to logout?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Disagree
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="md:hidden lg:hidden sm:block">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
