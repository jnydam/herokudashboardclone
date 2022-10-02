import React from "react";

import styles from "./UpperHeaderComp.module.css";

import mainHIcon from "../../../assets/leftherokuhicon.png";
import herokuHeaderTextIcon from "../../../assets/herokuheadertext.png";
import ninjaIcon from "../../../assets/ninjaavataricon.png";
import nineGridIcon from "../../../assets/ninegridicon.png";

const UpperHeaderComp: React.FC = (props) => {
  return (
    <div className={styles.upperHeaderCompContainer}>
      <div className={styles.leftSideContainer}>
        <img
          style={{
            marginLeft: "0.5rem",
            height: "3rem",
          }}
          alt="heroku icon"
          src={mainHIcon}
        ></img>
        <img
          alt="heroku header text icon"
          style={{
            marginLeft: "0.3rem",
            height: "1.5rem",
          }}
          src={herokuHeaderTextIcon}
        ></img>
      </div>
      <div className={styles.middleContainer}>
        <input
          className={styles.headerInputStyle}
          placeholder="Jump to Favorites, Apps, Pipelines, Spaces.."
        ></input>
      </div>
      <div className={styles.rightSideContainer}>
        <img
          alt="nine grid icon"
          src={nineGridIcon}
          style={{
            height: "3rem",
            marginRight: "1rem",
          }}
        ></img>
        <img
          alt="ninja icon"
          style={{
            height: "3rem",
            marginRight: "1rem",
          }}
          src={ninjaIcon}
        ></img>
      </div>
    </div>
  );
};

export default UpperHeaderComp;
