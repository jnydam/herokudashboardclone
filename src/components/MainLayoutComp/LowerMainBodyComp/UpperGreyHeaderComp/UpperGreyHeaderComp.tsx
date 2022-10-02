import React from "react";

import styles from "./UpperGreyHeaderComp.module.css";

const UpperGreyHeaderComp: React.FC = (props) => {
  return (
    <div className={styles.upperGreyHeaderCompContainer}>
      <div className={styles.centeredInnerDataContainer}>
        <div className={styles.leftSideContainer}></div>
        <div className={styles.rightSideContainer}></div>
      </div>
    </div>
  );
};

export default UpperGreyHeaderComp;
