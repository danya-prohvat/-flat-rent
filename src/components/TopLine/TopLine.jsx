import React from 'react';
import styles from "./TopLine.module.css";
import classNames from 'classnames';
import SiteName from "./SiteName/SiteName";
import MyProfile from "./MyProfile/MyProfile";
import {connect} from "react-redux";


const TopLine = (props) => {


    return (<div className={classNames(styles.topLine)}>
        <div className={classNames(styles.topLine__wrapper)}>
            <SiteName />
            <div className={classNames(styles.myProfileContainer)}>
                <MyProfile authorized={props.authorized} authorizedPerson={props.authorizedPerson} />
            </div>
        </div>
    </div>);
}



let mapStateToProps = (state) => ({
    authorized: state.usersPage.authorized,
    authorizedPerson: state.usersPage.authorizedPerson,
})

export default connect(mapStateToProps, {})(TopLine);