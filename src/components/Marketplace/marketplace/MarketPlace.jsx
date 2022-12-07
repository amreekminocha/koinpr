import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import MarketPlaceCards from "./MarketPlaceCards";
import axios from "../../../axios";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Usekey } from "../../../common/keyboardInteraction/KeyboardPress";
import CachedIcon from "@mui/icons-material/Cached";
import { ProgressWithLabel } from "../../../common/progressWithLabel/ProgressWithLabel";
function MarketPlace() {
  const dispatch = useDispatch();

  const init = {
    listingCategory: "pressRelease",
    offerTitle: "",
  };
  // const [category, setCategory] = React.useState('press');
  const [input, setInput] = useState(init);

  const cookies = new Cookies();
  const navigate = useNavigate();

  const [marketList, setMarketList] = useState([]);

  const [userId, setUserId] = useState();

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

  const getData = () => {
    axios
      .get(`/api/listing/get-all?userId=${userId}`)
      .then((res) => {
        if (res.data.success) {
          setMarketList(res.data.data);
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  useEffect(() => {
    if (userId) {
      getData();
    }
  }, [userId]);

  //function to handle search
  const handleSearchKeys = (e) => {
    const { name, value } = e.target;

    if (name === "offerTitle") {
      setInput({ offerTitle: value, listingCategory: "" });
    } else if (name === "listingCategory") {
      setInput({ listingCategory: value, offerTitle: "" });
    }
    axios
      .get(`/api/listing/get-all?${name}=${value}&userId=${userId}`)
      .then((res) => {
        if (res.data.success) {
          setMarketList(res.data.data);
        }
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  const handleReset = () => {
    getData();
    setInput(init);
  };
  //keyboard interaction
  // Usekey("Enter", handleSearchKeys);
  // Usekey("NumpadEnter", handleSearchKeys);

  return (
    <>
      <div className="w-full p-4 mx-auto mt-20 bg-white rounded-xl shadow-md overflow-hidden ">
        <div className="md:flex lg:flex xs:flex w-full">
          <div className="p-5 md:w-3/12 lg:w-3/12 sm:w-full bg-[#F8F8F8]">
            <Grid container spacing={2}>
              <Grid item xs={12} md={12} sx={{ marginLeft: "1em" }}>
                <p
                  className="sm:invisible md:visible"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                  }}
                >
                  Search offerTitle
                </p>
                <FormControl sx={{width:"98%"}} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Enter publisher name
                  </InputLabel>

                  <OutlinedInput
                    size="small"
                    fullWidth
                    sx={{ p: "10px" }}
                    id="outlined-basic"
                    name="offerTitle"
                    value={input.offerTitle}
                    onChange={handleSearchKeys}
                    label="Enter publisher name"
                    variant="outlined"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={handleSearchKeys} edge="end">
                          <SavedSearchIcon />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid
                xs={12}
                md={12}
                sx={{ marginLeft: "2em", marginTop: "1em" }}
              >
                <p
                  className="sm:invisible md:visible"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "16px",
                  }}
                >
                  Choose Category
                </p>

                <Box sx={{ minWidth: 220 }}>
                  <FormControl sx={{ width: "98%" }} size="small">
                    <InputLabel id="demo-simple-select-label">
                      Listing Category
                    </InputLabel>
                    <Select
                      sx={{ padding: "10px" }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={input.listingCategory}
                      name="listingCategory"
                      label="Listing Category"
                      onChange={handleSearchKeys}
                    >
                      <MenuItem value={"pressRelease"}>Press Release</MenuItem>
                      <MenuItem value={"sponsoredArticle"}>
                        Sponsored Articles
                      </MenuItem>
                      <MenuItem value={"buttonAds"}>Button Ads</MenuItem>
                      <MenuItem value={"bannerads"}>Banner Ads</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          </div>
          <div className="p-3 md:w-8/12 lg:w-8/12 sm:w-full place-content-center md:mx-20 ">
            <Grid container spacing={2}>
              <Grid sx={{textAlign:"center"}} item xs={12} md={12}>
                <Link to="/add-listing">
                
              <Button  variant="contained">
ADD
                </Button>
                </Link>
              </Grid>
             
              {marketList?.map((el) => (
                <Grid item xs={12} md={4}>
                  <MarketPlaceCards
                    data={el}
                    name={el?.user?.fullName}
                    details={"View Details"}
                    price={el?.price}
                  />
                </Grid>
              ))}
              {marketList?.length === 0 ? (
                <div
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={handleReset}
                >
                  <h1>No Data Found</h1>
                  <ProgressWithLabel />
                  <CachedIcon />
                </div>
              ) : null}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketPlace;
