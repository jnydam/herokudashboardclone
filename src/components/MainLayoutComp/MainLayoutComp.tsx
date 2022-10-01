import React from 'react';

import styles from './MainLayoutComp.module.css';
import UpperHeaderComp from './UpperHeaderComp/UpperHeaderComp';

const MainLayoutComp: React.FC = (props) => {

    return (<div className={styles.mainLayoutCompContainer}>
        <UpperHeaderComp></UpperHeaderComp>
    </div>)
}

export default MainLayoutComp;