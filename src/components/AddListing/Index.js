import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { Usekey } from "../../common/keyboardInteraction/KeyboardPress";
import "./AddListing.scss";

import Cookies from "universal-cookie";
import CustomizedDialogs from "../../common/alertDialogue/AlertDialogForApiResponse";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

const AddListing = () => {
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const cookies = new Cookies();
  const [userId, setUserId] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const auth = cookies.get("auth-token");
    console.log(auth);
    if (!auth) {
      navigate("/sign-in");
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
          navigate("/sign-in");
        }
        setUserId(res.data.user._id);
      })
      .catch((err) => {
        console.log(err, "err");
        navigate("/sign-in");
      });
  }, [userId]);

  const init = {
    email: "",
    userType: "",
    price: 0,
    websiteLink: "",
    offerTitle: "",
    listingCategory: "",
    logo: "",
    websiteLanguage: "",
    noFollowLinkAllowed: true,
    doFollowLinkAllowed: true,
    indexedArticle: "",
    linkedin: "",
    googleNews: "",
    socialShare: "",
    facebook: "",
    twitter: "",
  };

  const [addListingInput, setAddListingInput] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddListingInput({ ...addListingInput, [name]: value });
  };
  const [showDialog, setShowDialog] = useState(false);
  const handleSubmit = () => {
    const {
      email,
      userType,
      price,
      websiteLanguage,
      linkedin,
      googleNews,
      socialShare,
      facebook,
      twitter,
      offerTitle,
      listingCategory,
      logo,
      noFollowLinkAllowed,
      doFollowLinkAllowed,
      indexedArticle,
      websiteLink,
     
    } = addListingInput;
    const token = cookies.get("auth-token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post(
        "api/listing/add",
        {
          email,
          userType,
          price,
          websiteLanguage,
          linkedin,
          googleNews,
          socialShare,
          facebook,
          twitter,
          offerTitle,
          listingCategory,
          logo,
          noFollowLinkAllowed,
          doFollowLinkAllowed,
          indexedArticle,
          websiteLink,
          userType,
          userId: userId,
        },
        config
      )
      .then((res) => {
        if (res?.data?.success) {
          navigate("/");
        }
        console.log(res);
        if (!res?.data.success) {
          <CustomizedDialogs
            open={showDialog}
            setShowDialog={setShowDialog}
            err={res?.data?.message}
          />;
          console.log("error", res);
          alert("res?.data?.message");
          setShowDialog(true);
        }
      })
      .catch((err) => {
        if (!err?.response?.data?.success) setShowDialog(true);
        <CustomizedDialogs
          showDialog={true}
          setShowDialog={setShowDialog}
          err={err?.response?.data?.message}
        />;
        alert(err?.response?.data?.message);
        // console.log("err", err);
        // console.log("err", err?.response?.data?.message);
      });
  };

  //keyboard interaction
  Usekey("Enter", handleSubmit);
  Usekey("NumpadEnter", handleSubmit);
  return (
    <>
      <div className="AddListing">
        <div className="content">
          <div className="mainHeading">Add Your Listing</div>
          <div className="inputs">
            <input
              onChange={handleChange}
              name="websiteLink"
              type="text"
              placeholder="Your Website Link"
              className="input"
            />
            <input
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="Email"
              className="input"
            />
            <input
              onChange={handleChange}
              type="text"
              placeholder="Offer Title"
              className="input"
            />
          </div>
          <div className="inputs">
            <input
              onChange={handleChange}
              name="offerTitle"
              type="text"
              placeholder="Listing Category"
              className="input"
            />
            <input
              onChange={handleChange}
              type="button"
              className="input but"
              name="logo"
              value="UploadLogo +"
            />
         
          </div>
         
          <div className="subHeading">More Details</div>
          <div className="inputs">
            <input
              onChange={handleChange}
              name="websiteLanguage"
              type="text"
              placeholder="Your Website Language"
              className="input"
            />
          
            <input
              onChange={handleChange}
              type="text"
              name="noFollowLinkAllowed"
              placeholder="No-Follow Links Allowed"
              className="input"
            />
            <input
              onChange={handleChange}
              type="text"
              name="doFollowLinkAllowed"
              placeholder="Do-Follow Links Allowed"
              className="input"
            />
          </div>
          <div className="inputs">
            <input
              onChange={handleChange}
              type="text"
              name="indexedArticle"
              placeholder="Indexed Article"
              className="input"
            />
            <input
              onChange={handleChange}
              name="linkedin"
              type="text"
              placeholder="LinkedIn Link"
              className="input"
            />
            <input
              onChange={handleChange}
              type="text"
              name="googleNews"
              placeholder="Google News Visibilty"
              className="input"
            />
          </div>
          <div className="inputs">
            <input
              onChange={handleChange}
              type="text"
              name="socialShare"
              placeholder="Social Share"
              className="input"
            />
            <input
              onChange={handleChange}
              type="text"
              name="facebook"
              placeholder="Facebook Link"
              className="input"
            />
            <input
              onChange={handleChange}
              type="text"
              name="twitter"
              placeholder="Twitter Link"
              className="input"
            />
            
          </div>
          <div className="inputs">
          <input
              onChange={handleChange}
              name="userType"
              type="text"
              placeholder="User Type"
              className="input"
            />
         
          </div>
          <button type="button" onClick={handleSubmit} className="submit">
            Submit Listing
          </button>
        </div>
        {/* {showDialog ? (
          <CustomizedDialogs open={true} err={"res?.data?.message"} />
        ) : null} */}
      </div>
    </>
  );
};

export default AddListing;
