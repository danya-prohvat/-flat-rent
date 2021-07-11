import React from 'react';
import styles from "./MyProfile.module.css";
import classNames from 'classnames';
import personIcon from '../../../assets/personIcon.svg';



const MyProfile = (props) => {

    return (<div className={classNames(styles.myProfile)}>
        <img src={personIcon} alt=""/>
        <span>Daniil</span>
    </div>);
}


export default MyProfile;