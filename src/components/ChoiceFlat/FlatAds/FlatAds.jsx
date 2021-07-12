import React from 'react';
import styles from "./FlatAds.module.css";
import classNames from 'classnames';
import FlatAd from "./FlatAd/FlatAd";
import {connect} from "react-redux";


const FlatAds = (props) => {

    let flatElements = props.flats.slice((props.activePage-1) * props.pageSize, props.activePage * props.pageSize).map(el => {
        return <FlatAd key={el.id} flat={el}/>
    })


    // console.log(props.flats.);

    return (<div className={classNames(styles.flatAds)}>
        <h2 className={classNames(styles.blockTitle)}>Обьявления</h2>
        {flatElements}
    </div>);
}


export default FlatAds;