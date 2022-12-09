import * as React from "react";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import image from "../../assets/handsPicked.png";
import styles from "./homeExtended.module.css";
import { Divider, Paper } from "@mui/material";
import image1 from "../../assets/Right1.png";
import image2 from "../../assets/Right2.png";
import image3 from "../../assets/Right3.png";
import image4 from "../../assets/Right4.png";
import image5 from "../../assets/Right5.png";
import image6 from "../../assets/Right6.png";
import image7 from "../../assets/Right7.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Card from "../home/Card";

export default function HomeExtended() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Paper
      sx={{
        padding: "10px",
        height: "100vh",
      }}
    >
      {/* <Typography
        sx={{
          width: "90%",
          margin: "auto",
          fontSize: "17px",
          fontWeight: 700,
          //   marginBottom: "30px",
        }}
      >
        Straight From The World
      </Typography> */}
      <div
        style={{
          display: "flex",
          width: "95%",
          margin: "auto",
          justifyContent: "space-between",
          color: "black",
        }}
      >
        <span style={{ fontSize: "16px", fontWeight: 700 }}>Metaverse</span>
        <span style={{ fontSize: "16px", fontWeight: 600 }}>Bitcoin</span>
        <span style={{ fontSize: "16px", fontWeight: 600 }}>Ethereum</span>
        <span style={{ fontSize: "16px", fontWeight: 600 }}>Web3</span>
      </div>
      <Card
        heading={
          "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
        }
        alt={"fsb"}
        subheader={"Cointelegraph"}
        date={"23 Nov, 2022"}
        time={"4:29 PM"}
        image={image1}
      />
      <Card
        heading={
          "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
        }
        alt={"fsb"}
        subheader={"Cointelegraph"}
        date={"23 Nov, 2022"}
        time={"4:29 PM"}
        image={image2}
      />
      <Card
        heading={
          "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
        }
        alt={"fsb"}
        subheader={"Cointelegraph"}
        date={"23 Nov, 2022"}
        time={"4:29 PM"}
        image={image3}
      />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <span></span>
        <span style={{ fontWeight: 500, fontSize: "12px" }}>
          Load Metaverse News <ArrowForwardIcon sx={{ fontSize: "15px" }} />
        </span>
      </div>
    </Paper>
  );
}
