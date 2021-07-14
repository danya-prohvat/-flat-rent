import React from 'react';
import styles from "./User.module.css";
import classNames from 'classnames';
import personIcon from "../../../assets/personIcon.svg";


const User = (props) => {


    return (<div className={classNames(styles.user)}>
        <img src={personIcon} alt=""/>
        <span>Daniil</span>
    </div>);
}


export default User;
