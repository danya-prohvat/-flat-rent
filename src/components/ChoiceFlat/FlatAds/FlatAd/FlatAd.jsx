import React from 'react';
import styles from "./FlatAd.module.css";
import classNames from 'classnames';
import {NavLink} from "react-router-dom";


const FlatAd = (props) => {


    return (<NavLink to={"/flat/" + props.flat.id} className={classNames(styles.flatAd)}>
        <div className={classNames(styles.flatAd__img)}>
            <img src={'/flatImages/' + props.flat.images[0]} />
        </div>
        <div className={classNames(styles.flatAd__text)}>
            <span className={classNames(styles.flatAd__title)}>{props.flat.title}</span>
            <span className={classNames(styles.flatAd__price)}>{props.flat.price + ' грн.'}</span>
            <div className={classNames(styles.flatAd__description)}>{props.flat.description.squareMeter  + ' м2.' + ' • ' + 'Комнат: ' + props.flat.description.rooms + ' '}{props.flat.description.withFurnitures ? ' • C мебелью' : ' • Без мебели' }</div>
            <div className={classNames(styles.flatAd__location)}>{props.flat.location}</div>
        </div>
    </NavLink>);
}


export default FlatAd;