import React from "react";

import styles from "./UpperGreyHeaderComp.module.css";

import purpleCircleGraphic from "../../../../assets/purplecircleavatar.png";
import upDownGraphic from "../../../../assets/updownicon.png";

const UpperGreyHeaderComp: React.FC = (props) => {
  return (
    <div className={styles.upperGreyHeaderCompContainer}>
      <div className={styles.centeredInnerDataContainer}>
        <div className={styles.leftSideContainer}>
          <img
            alt="purple avatar"
            style={{
              height: "2.5rem",
              marginRight: "0.5rem",
            }}
            src={purpleCircleGraphic}
          ></img>
          <span
            style={{
              fontSize: "1.1rem",
              color: "#79589f",
              marginRight: "0.5rem",
            }}
          >
            Personal
          </span>
          <img
            alt="up down graphic"
            style={{
              height: "2.5rem",
            }}
            src={upDownGraphic}
          ></img>
        </div>
        <div className={styles.rightSideContainer}>
          <button className={styles.newButtonStyle}>
            <span
              style={{
                marginLeft: "0.5rem",
              }}
            >
              New
            </span>
            <img
              alt="up down graphic"
              style={{
                height: "2rem",
                marginLeft: "0.3rem",
              }}
              src={upDownGraphic}
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperGreyHeaderComp;
