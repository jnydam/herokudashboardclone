import React from "react";
import LowerMainBodyComp from "./LowerMainBodyComp/LowerMainBodyComp";

import styles from "./MainLayoutComp.module.css";
import UpperHeaderComp from "./UpperHeaderComp/UpperHeaderComp";

import herokuHIconGraphic from "../../assets/leftherokuhicon.png";

const MainLayoutComp: React.FC = (props) => {
  return (
    <React.Fragment>
      <div className={styles.mainLayoutCompContainer}>
        <UpperHeaderComp></UpperHeaderComp>
        <div className={styles.gradientColorStyle}></div>
        <LowerMainBodyComp></LowerMainBodyComp>
      </div>
      <div className={styles.mobileContainer}>
        <img
          style={{
            marginBottom: "1rem",
          }}
          alt="heroku h icon"
          src={herokuHIconGraphic}
        ></img>
        <div className={styles.innerMobileWhiteBox}>
          <span>
            This project is optimized for desktop views. Please resize your
            browser window a little wider or view it on a device with a larger
            screen.
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayoutComp;
