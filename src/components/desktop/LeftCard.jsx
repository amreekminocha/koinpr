import * as React from "react";
import { styled } from "@mui/material/styles";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import image from "../assets/handsPicked.png";
import styles from "./desktopstyle.module.css";
import { Divider, Paper } from "@mui/material";

export default function DesktopLeftPaper() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Paper sx={{ width: "449px", padding: "39px" }}>
      <Typography
        sx={{
          width: "340px",
          margin: "auto",
          fontSize: "19px",
          fontWeight: 700,
        }}
      >
        Hands Picked | 1:00 PM - 3:00 PM
        <Divider />
        <div style={{ marginTop: "35px" }}>
          <img src={image} />
        </div>
      </Typography>
      <Typography sx={{ fontSize: "15px", fontWeight: 600, marginTop: "27px" }}>
        Whales buy $1.03 billion worth of ETH despite technical indicators
        suggesting a bearish trend
        <Divider />
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          fontWeight: 500,
          marginTop: "13.99px",
        }}
      >
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
    </Paper>
  );
}
