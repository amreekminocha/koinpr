import { Divider, Grid, Paper, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import DesktopLeftPaper from "./LeftCard";
import RightCard from "./RightCard";
import image1 from "../assets/Right1.png";
import { Box } from "@mui/system";
import styles from "./desktopstyle.module.css";
function Desktop() {
  const [tabValue, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={styles.mainDiv}>
      <DesktopLeftPaper />
      <Paper className={styles.leftPaper}>
        <Typography className={styles.handPickedTypo}>
          Hands Picked | 1:00 PM - 3:00 PM
        </Typography>
        <Divider />
        <Grid container>
          <Grid item xs={12} md={6}>
            <RightCard
              heading={
                "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
              }
              alt={"fsb"}
              subheader={"Cointelegraph"}
              date={"23 Nov, 2022"}
              time={"4:29 PM"}
              image={image1}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RightCard
              heading={
                "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
              }
              alt={"fsb"}
              subheader={"Cointelegraph"}
              date={"23 Nov, 2022"}
              time={"4:29 PM"}
              image={image1}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RightCard
              heading={
                "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
              }
              alt={"fsb"}
              subheader={"Cointelegraph"}
              date={"23 Nov, 2022"}
              time={"4:29 PM"}
              image={image1}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RightCard
              heading={
                "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
              }
              alt={"fsb"}
              subheader={"Cointelegraph"}
              date={"23 Nov, 2022"}
              time={"4:29 PM"}
              image={image1}
            />
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            bgcolor: "background.paper",
          }}
        >
          <Tabs value={tabValue} onChange={handleChange}>
            <Tab label="Metaverse" />
            <Tab label="Bitcoin" />
            <Tab label="Ethereum" />
            <Tab label="NFT" />
            <Tab label="CBDC" />
          </Tabs>
        </Box>
        <Divider />
        {tabValue === 0 ? (
          <Grid container>
            <Grid item xs={12} md={6}>
              <RightCard
                heading={
                  "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
                }
                alt={"fsb"}
                subheader={"Cointelegraph"}
                date={"23 Nov, 2022"}
                time={"4:29 PM"}
                image={image1}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RightCard
                heading={
                  "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
                }
                alt={"fsb"}
                subheader={"Cointelegraph"}
                date={"23 Nov, 2022"}
                time={"4:29 PM"}
                image={image1}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RightCard
                heading={
                  "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
                }
                alt={"fsb"}
                subheader={"Cointelegraph"}
                date={"23 Nov, 2022"}
                time={"4:29 PM"}
                image={image1}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <RightCard
                heading={
                  "FSB official draws comparison between Crypto market and collapse of Bank of Amsterdam"
                }
                alt={"fsb"}
                subheader={"Cointelegraph"}
                date={"23 Nov, 2022"}
                time={"4:29 PM"}
                image={image1}
              />
            </Grid>
          </Grid>
        ) : tabValue === 1 ? (
          "No Data Availanle for Now Realted to Bitcoin"
        ) : null}
      </Paper>
    </div>
  );
}

export default Desktop;
