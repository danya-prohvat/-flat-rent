import React from 'react';
import styles from "./ChoiceFlat.module.css";
import classNames from 'classnames';
import FlatFilter from "./FlatFilter/FlatFilter";
import FlatAds from "./FlatAds/FlatAds";


const ChoiceFlat = (props) => {


    return (<div className={classNames(styles.choiceFlat)}>
        <div className={classNames(styles.choiceFlat__wrapper)}>
            <FlatFilter/>
            <FlatAds/>
        </div>
    </div>);
}


export default ChoiceFlat;