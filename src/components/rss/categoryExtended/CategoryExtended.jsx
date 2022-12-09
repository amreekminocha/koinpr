import * as React from "react";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import image from "../../assets/handsPicked.png";
import styles from "./category.module.css";
import { Divider, Paper } from "@mui/material";
import image1 from "../../assets/Right1.png";
import image2 from "../../assets/Right2.png";
import image3 from "../../assets/Right3.png";
import image4 from "../../assets/Right4.png";
import image5 from "../../assets/Right5.png";
import image6 from "../../assets/Right6.png";
import image7 from "../../assets/Right7.png";
import Card from "../home/Card";

export default function CategoryExtended() {
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
          fontSize: "17px",
          fontWeight: 700,
          //   marginBottom: "30px",
        }}
      >
        Straight From The World
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

      <div style={{ marginTop: "35px" }}>
        <img src={image} width="95%" />
      </div>
      <Typography className={styles.typo}>
        Fraudsters fake former Singapore stock exchange domains to sell bogus
        Crypto businesses
      </Typography>
    </Paper>
  );
}
