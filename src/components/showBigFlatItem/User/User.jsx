import React from 'react';
import styles from "./User.module.css";
import classNames from 'classnames';
import personIcon from "../../../assets/personIcon.svg";


const User = (props) => {

    return (<div className={classNames(styles.user)}>
        <img src={personIcon} alt=""/>
        {/*<span>{props.author}</span>*/}
        <span>{props.authorizedPerson == props.author ? 'Вы' : props.author}</span>
    </div>);
}


export default User;
