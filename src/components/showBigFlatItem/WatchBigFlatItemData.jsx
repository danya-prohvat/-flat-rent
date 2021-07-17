import React from 'react';
import styles from "./ShowBigFlatItem.module.css";
import classNames from 'classnames';

const WatchData = (props) => {
    return (<div>
        <div className={classNames(styles.header__mainInfo)}>
            <span className={classNames(styles.header__title)}>{props.currentFlat.title}</span>
            <span className={classNames(styles.header__price)}>{props.currentFlat.price + ' грн.'}</span>
        </div>
        <div className={classNames(styles.header__description)}>
            <p>Город: {props.currentFlat.location}</p>
            <p>Комнат: {props.currentFlat.description.rooms}</p>
            <p>Метраж: {props.currentFlat.description.squareMeter} м2.</p>
            <p>{props.currentFlat.description.withFurnitures ? 'С мебелью' : 'Без мебели'}</p>
        </div>
    </div>);
}

export default WatchData;