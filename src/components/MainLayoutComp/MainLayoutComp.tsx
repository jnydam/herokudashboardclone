import React from "react";
import LowerMainBodyComp from "./LowerMainBodyComp/LowerMainBodyComp";

import styles from "./MainLayoutComp.module.css";
import UpperHeaderComp from "./UpperHeaderComp/UpperHeaderComp";

const MainLayoutComp: React.FC = (props) => {
  return (
    <div className={styles.mainLayoutCompContainer}>
      <UpperHeaderComp></UpperHeaderComp>
      <div className={styles.gradientColorStyle}></div>
      <LowerMainBodyComp></LowerMainBodyComp>
    </div>
  );
};

export default MainLayoutComp;
