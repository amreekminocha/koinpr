import {
  Grid,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandCard from "./ExpandCard";
import { styled } from "@mui/material/styles";
import styles from "./expand.module.css";
import Cookies from "universal-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../../axios";

// const data = [
//   { name: "Website", link: "https://www.google.com" },
//   { name: "Visitors ", link: "1M per month" },
//   { name: "Twitter", link: "https://twitter.com/" },
//   { name: "Facebook", link: "https:/facebook.com" },
//   { name: "Linkedin", link: "https://www.linkedin.com" },
//   { name: "Do-Follow Links", link: "No" },
//   { name: "No-Follow Links", link: "Yes(2)" },
//   { name: "Google News", link: "Google News" },
//   { name: "Indexed Article", link: "Yes" },
//   { name: "Social Share", link: "No" },
//   { name: "SNo-Follow Links", link: "Yes(2)" },
// ];

function Expand() {
  //state for table Data

  const [displayData, setDisplayData] = useState({});

  const cookies = new Cookies();
  const navigate = useNavigate();
  const [userId, setUserId] = useState();

  useEffect(() => {
    const auth = cookies.get("auth-token");
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
  }, []);

  const { id } = useParams();

  useEffect(() => {
    if (userId) {
      axios
        .get(`/api/listing/get-all?userId=${userId}&offerTitle=${id}`)
        .then((res) => {
          setDisplayData(res.data.data[0]);
          console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err, "err");
        });
    }
  }, [userId]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    width: "90%",
    margin: "auto",
    padding: "2em",
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div className={styles.mainDiv}>
      <Grid className={styles.gridContainer} container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
            variant="h6"
            fontWeight="bold"
          >
            <span>
              <ArrowBackIcon />
            </span>
            Continue Shopping
          </Typography>
        </Grid>
        <Grid className={styles.expandCardGrid} item xs={12} md={4}>
          <ExpandCard
            name={displayData?.user?.fullName}
            details={"About of the website"}
            price={displayData?.price}
            id={displayData?._id}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="md:mx-10">
            <Table className={styles.table}>
              <TableBody>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    Website
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.websiteLink}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    Visitors
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.visitors}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    Twitter
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.twitter}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    Facebook
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.facebook}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    Linkedin
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.linkedin}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    Do-Follow Links
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.doFollowLinkAllowed ? "True" : "False"}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    No-Follow Links
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.noFollowLinkAllowed ? "True" : "False"}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    Google News
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.googleNews}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    Indexed Article
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.indexedArticle}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    Indexed Social Share
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.socialShare}
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ border: "1px solid black", fontWeight: "bold" }}
                >
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    component="th"
                    scope="row"
                  >
                    SNo-Follow Links
                  </TableCell>
                  <TableCell
                    sx={{ border: "1px solid black", fontWeight: "bold" }}
                    align="right"
                  >
                    {displayData?.folllow}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Expand;
