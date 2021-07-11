import React from 'react';
import styles from "./TopLine.module.css";
import classNames from 'classnames';
import SiteName from "./SiteName/SiteName";
import MyProfile from "./MyProfile/MyProfile";
import PostAd from "./PostAd/PostAd";


const TopLine = (props) => {


    return (<div className={classNames(styles.topLine)}>
        <div className={classNames(styles.topLine__wrapper)}>
            <SiteName />
            <div className={classNames(styles.myProfileContainer)}>
                <MyProfile />
                <PostAd />
            </div>
        </div>
    </div>);
}


export default TopLine;