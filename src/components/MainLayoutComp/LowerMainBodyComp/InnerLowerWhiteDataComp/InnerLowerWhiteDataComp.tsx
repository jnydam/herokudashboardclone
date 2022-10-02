import React from "react";

import styles from "./InnerLowerWhiteDataComp.module.css";

const InnerLowerWhiteDataComp: React.FC = (props) => {
  return (
    <div className={styles.innerLowerWhiteDataCompContainer}>
      <div className={styles.searchBarRowContainer}></div>
      <div className={styles.projectListContainer}></div>
    </div>
  );
};

export default InnerLowerWhiteDataComp;
