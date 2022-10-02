import React from "react";
import InnerLowerWhiteDataComp from "./InnerLowerWhiteDataComp/InnerLowerWhiteDataComp";

import styles from "./LowerMainBodyComp.module.css";
import UpperGreyHeaderComp from "./UpperGreyHeaderComp/UpperGreyHeaderComp";

const LowerMainBodyComp: React.FC = (props) => {
  return (
    <div className={styles.lowerMainBodyCompContainer}>
      <UpperGreyHeaderComp></UpperGreyHeaderComp>
      <InnerLowerWhiteDataComp></InnerLowerWhiteDataComp>
    </div>
  );
};

export default LowerMainBodyComp;
