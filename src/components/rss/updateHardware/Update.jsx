import React from "react";
import styles from "./update.module.css";
function Update() {
  return (
    <>
      <div className={styles.center}>
        <div style={{ marginTop: "50vh" }}>
          <p
            style={{
              fontWeight: 700,
              fontSize: "15px",
              width: "90%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            We have added some new features for you. Please update the app.
          </p>
          <button
            style={{
              height: "51px",
              background: "black",
              width: "132px",
              color: "white",
              marginTop: "23px",
              marginLeft: "100px",
              borderRadius: "5px",
              fontSize: "15px",
              //   fontWeight: 600,
            }}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default Update;
