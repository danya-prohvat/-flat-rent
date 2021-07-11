import React from 'react';
import styles from "./SiteName.module.css";
import classNames from 'classnames';


const SiteName = (props) => {



    return (<div>
        <h1 className={classNames(styles.logoText)}>Аренда квартир</h1>
    </div>);
}


export default SiteName;