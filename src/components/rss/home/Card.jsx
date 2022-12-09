import React from "react";

function Card({ image, heading, subheader, date, time, alt }) {
  return (
    <div
      style={{
        marginTop: "38px",
        // marginLeft: "38px",
        marginBottom: "35px",
        // marginRight: "21px",
      }}
    >
      <div style={{ display: "flex" }}>
        <img src={image} alt={alt} style={{ width: "121px", height: "77px" }} />
        <span>
          <h1
            style={{
              width: "98%",
              fontSize: "11px",
              fontWeight: 600,
              marginLeft: "11px",
            }}
          >
            {heading}
          </h1>
          <span
            style={{
              width: "202px",
              fontSize: "9px",
              fontWeight: 500,
              marginLeft: "11px",
              color: "#AAAAAA",
            }}
          >
            {subheader}|{date}-{time}
          </span>
        </span>
      </div>
    </div>
  );
}

export default Card;
