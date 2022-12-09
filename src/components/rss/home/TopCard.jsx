import * as React from "react";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import image from "../../assets/handsPicked.png";
import styles from "./home.module.css";
import { Divider, Paper } from "@mui/material";
import image1 from "../../assets/Right1.png";
import image2 from "../../assets/Right2.png";
import image3 from "../../assets/Right3.png";
import image4 from "../../assets/Right4.png";
import image5 from "../../assets/Right5.png";
import image6 from "../../assets/Right6.png";
import image7 from "../../assets/Right7.png";
import Card from "./Card";

export default function TopCard() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Paper
      sx={{
        padding: "10px",
      }}
    >
      <Typography
        sx={{
          width: "90%",
          margin: "auto",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        Hands Picked | 1:00 PM - 3:00 PM
        <Divider />
        {/* <div style={{ marginTop: "35px" }}>
          <img src={image} />
        </div> */}
      </Typography>
      <Typography className={styles.typoTop}>
        Whales buy $1.03 billion worth of ETH despite technical indicators
        suggesting a bearish trend
        <Divider className={styles.divider} />
      </Typography>
      <Typography className={styles.typo}>
        German financial regulator: Current Crypto sector does not pose threat
        to the financial stability
      </Typography>
      <Divider className={styles.divider} />
      <Typography className={styles.typo}>
        German financial regulator: Current Crypto sector does not pose threat
        to the financial stability
      </Typography>
      <Divider className={styles.divider} />
      <Typography className={styles.typo}>
        German financial regulator: Current Crypto sector does not pose threat
        to the financial stability
      </Typography>
      <Divider className={styles.divider} />
      <Typography className={styles.typo}>
        German financial regulator: Current Crypto sector does not pose threat
        to the financial stability
      </Typography>
      <Divider className={styles.divider} />

      <Typography
        sx={{
          width: "90%",
          margin: "auto",
          fontSize: "17px",
          fontWeight: 700,
          marginTop: "31px",
        }}
      >
        Straight From The World
        {/* <div style={{ marginTop: "35px" }}>
          <img src={image} />
        </div> */}
      </Typography>
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
    </Paper>
  );
}
