import React from 'react';
import styles from "./FlatAds.module.css";
import classNames from 'classnames';
import FlatAd from "./FlatAd/FlatAd";
import {connect} from "react-redux";


const FlatAds = (props) => {

    let flatElements = props.flats.map(el => {
        return <FlatAd key={el.id} flat={el}/>
    })

    return (<div className={classNames(styles.flatAds)}>
        <h2 className={classNames(styles.blockTitle)}>Обьявления</h2>
        {flatElements}
    </div>);
}

let mapStateToProps = (state) => ({
    flats: state.flatCollectionPage.flats,
})

export default connect(mapStateToProps, {})(FlatAds);