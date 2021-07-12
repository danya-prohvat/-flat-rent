import React from 'react';
import styles from "./FlatAd.module.css";
import classNames from 'classnames';


const FlatAd = (props) => {


    return (<div className={classNames(styles.flatAd)}>
        <div className={classNames(styles.flatAd__img)}>
            <img src={'/flatImages/' + props.flat.images[0]} />
        </div>
        <div className={classNames(styles.flatAd__text)}>
            <span className={classNames(styles.flatAd__title)}>{props.flat.title}{props.flat.id}</span>
            <span className={classNames(styles.flatAd__price)}>{props.flat.price}</span>
            <div className={classNames(styles.flatAd__description)}>{props.flat.description.squareMeter + ' • ' + props.flat.description.floor + ' этаж '}{props.flat.description.withFurnitures ? ' • C мебелью' : ' • Без мебели' }</div>
            <div className={classNames(styles.flatAd__location)}>{props.flat.location}</div>
        </div>
    </div>);
}


export default FlatAd;