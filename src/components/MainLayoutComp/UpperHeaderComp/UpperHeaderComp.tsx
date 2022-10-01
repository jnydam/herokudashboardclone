import React from 'react';

import styles from './UpperHeaderComp.module.css';

const UpperHeaderComp: React.FC = (props) => {

    return (<div className={styles.upperHeaderCompContainer}>
        <span>This is the upper header comp</span>
    </div>)
}

export default UpperHeaderComp;