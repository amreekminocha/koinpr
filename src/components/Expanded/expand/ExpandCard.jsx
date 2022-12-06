import { Avatar, Paper } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import styles from "./expand.module.css";
function ExpandCard({ name, details, image, price = 10 }) {
  return (
    <>
      <Paper
        style={{ background: "#F9F9F9" }}
        className="md:w-[484px] h-[380px] sm:w-full  p-6"
      >
        <div style={{ display: "flex", marginTop: "22px" }}>
          <Avatar>{image}</Avatar>
          <div
            style={{
              marginTop: "0.4em",
              marginLeft: "12px",
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            {name}
          </div>
        </div>

        <div
          style={{
            marginTop: "100px",
            color: "#4E4D4D",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          {details}
        </div>
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          <p>${price}</p>
          <AddCircleOutlineIcon />
        </div>
      </Paper>
    </>
  );
}

export default ExpandCard;
