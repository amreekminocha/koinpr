import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import MarketPlaceCard from "./MarketPlaceCard";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import MarketPlaceCards from "./MarketPlaceCards";
import styles from "./marketplaceMobile.module.css";
import axios from "../../../axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { showIndividualMarketplaceData } from "../../../redux/actions";
import Expanded from "../../Expanded";
function MarketPlace() {
  const dispatch = useDispatch();

  const init = {
    category: "",
    publisher: "",
  };
  // const [category, setCategory] = React.useState('press');
  const [input, setInput] = useState(init);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput({ ...input, [name]: value });
  };
  console.log(input);

  const cookies = new Cookies();
  const navigate = useNavigate();

  const [marketList, setMarketList] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [userId, setUserId] = useState();
  const [showData, setShowData] = useState(false);
  const [showDetailData, setShowDetailData] = useState({});

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

  useEffect(() => {
    if (userId) {
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
    }
  }, [userId]);

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
                  Search publishers
                </p>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Enter publisher name
                  </InputLabel>

                  <OutlinedInput
                    size="small"
                    sx={{ padding: "3px" }}
                    fullWidth
                    id="outlined-basic"
                    name="publisher"
                    value={input.publisher}
                    onChange={handleChange}
                    label="Enter publisher name"
                    variant="outlined"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
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
                <div className={styles.inputs}>
                  <div
                    // onClick={() => setType('ADVERTISER')}
                    className={styles.input}
                  >
                    <label htmlFor="adv">Press Release</label>
                    <input
                      type="radio"
                      name="account"
                      className="round"
                      id="adv"
                      //  checked={type === 'ADVERTISER'}
                    />
                  </div>
                  <div
                    // onClick={() => setType('PUBLISHER')}
                    className={styles.input}
                  >
                    <label htmlFor="pub">Sponsored Articles</label>
                    <input
                      type="radio"
                      name="account"
                      className="round"
                      id="pub"
                      // checked={type === 'PUBLISHER'}
                    />
                  </div>
                  <div
                    // onClick={() => setType('PUBLISHER')}
                    className={styles.input}
                  >
                    <label htmlFor="pub">Button Ads</label>
                    <input
                      type="radio"
                      name="account"
                      className="round"
                      id="pub"
                      // checked={type === 'PUBLISHER'}
                    />
                  </div>
                  <div
                    // onClick={() => setType('PUBLISHER')}
                    className={styles.input}
                  >
                    <label htmlFor="pub">Banner Ads</label>
                    <input
                      type="radio"
                      name="account"
                      className="round"
                      id="pub"
                      // checked={type === 'PUBLISHER'}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className="p-3 md:w-8/12 lg:w-8/12 sm:w-full place-content-center md:mx-20 ">
            <Grid container spacing={2}>
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

              {/* <Grid item xs={12} md={4}>
                     <MarketPlaceCards name={"Name"} details={"View Details"} price={10}/>

                 </Grid>
                 <Grid item xs={12} md={4}>
                 <MarketPlaceCards name={"Name"} details={"View Details"} price={10}/>



                 </Grid>
                 <Grid item xs={12} md={4}>
                                                    <MarketPlaceCards name={"Name"} details={"View Details"} price={10}/>


                 </Grid>
                
                 </Grid>
                 <Grid sx={{marginTop:"20px"}} container spacing={2}>

                 <Grid item xs={12} md={4}>
                                                    <MarketPlaceCards name={"Name"} details={"View Details"} price={10}/>


                 </Grid>
                 <Grid item xs={12} md={4}>
                                                    <MarketPlaceCards name={"Name"} details={"View Details"} price={10}/>


                 </Grid>
                 <Grid item xs={12} md={4}>
                                                    <MarketPlaceCards name={"Name"} details={"View Details"} price={10}/>


                 </Grid>
                 </Grid>
                 <Grid sx={{marginTop:"20px"}} container spacing={3}>

                 <Grid item xs={12} md={4}>
                                                    <MarketPlaceCards name={"Name"} details={"View Details"} price={10}/>


                 </Grid> */}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default MarketPlace;
