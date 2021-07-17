import React from 'react';
import styles from "./MyProfile.module.css";
import classNames from 'classnames';
import personIcon from '../../../assets/personIcon.svg';
import {NavLink} from "react-router-dom";



const MyProfile = (props) => {

    return (<div className={classNames(styles.myProfile)}>
        <img src={personIcon} alt=""/>
        {props.authorized ? <span>{props.authorizedPerson}</span> : <NavLink className={classNames(styles.myProfile__navLink)} to={'/login'}>Войти</NavLink>}
    </div>);
}


export default MyProfile;