import React from 'react';
import styles from "./PostAd.module.css";
import classNames from 'classnames';


const PostAd = (props) => {



    return (<div>
        <button className={classNames(styles.postAd)}>Подать обьяление</button>
    </div>);
}


export default PostAd;