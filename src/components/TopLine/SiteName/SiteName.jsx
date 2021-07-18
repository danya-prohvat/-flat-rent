import React from 'react';
import styles from "./SiteName.module.css";
import classNames from 'classnames';
import {NavLink} from "react-router-dom";


const SiteName = (props) => {



    return (<NavLink to={"/"} className={classNames(styles.siteName)}>
        <h1 className={classNames(styles.logoText)}>Аренда квартир</h1>
    </NavLink>);
}


export default SiteName;