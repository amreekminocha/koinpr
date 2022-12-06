import React, { useState } from "react";
import axios from "../../axios";
import { Usekey } from "../../common/keyboardInteraction/KeyboardPress";
import "./AddListing.scss";
import AddlistingMobile from "./AddlistingMobile";

const AddListing = () => {
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
    axios
      .post("api/listing/add", {
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
      })
      .then((res) => {
        if (res?.data?.success) {
          navigate("/");
        } else {
          console.log("error", res);
        }
      })
      .catch((err) => {
        console.log("err", err);
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
          <button type="button" onClick={handleSubmit} className="submit">
            Submit Listing
          </button>
        </div>
      </div>
    </>
  );
};

export default AddListing;
