import React from 'react';
import styles from "./ShowBigFlatItem.module.css";
import classNames from 'classnames';
import {NavLink, withRouter} from "react-router-dom";
import backArrow from '../../assets/backArrow.svg';
import {connect} from "react-redux";
import {compose} from "redux";
import Slider from "./Slider/Slider";
import User from "./User/User";


const ShowBigFlatItem = (props) => {

    const [currentFlat] = props.flats.filter(el => el.id == props.match.params.flatId);

    return (<div className={classNames(styles.showBigFlatItem)}>
        <div className={classNames(styles.showBigFlatItem__wrapper)}>
            <NavLink className={classNames(styles.back)} to="/"><img src={backArrow}
                                                                     alt=""/><span>назад</span></NavLink>
            <div className={classNames(styles.flatItem)}>
                <div className={classNames(styles.flatItem__header)}>
                    <div className={classNames(styles.header__mainInfo)}>
                        <span className={classNames(styles.header__title)}>{currentFlat.title}</span>
                        <span className={classNames(styles.header__price)}>{currentFlat.price + ' грн.'}</span>
                    </div>
                    <div className={classNames(styles.header__description)}>
                    <p>Город: {currentFlat.location}</p>
                    <p>Комнат: {currentFlat.description.rooms}</p>
                    <p>Метраж: {currentFlat.description.squareMeter} м2.</p>
                        <p>{currentFlat.description.withFurnitures ? 'С мебелью' : 'Без мебели'}</p>
                    </div>
                </div>
                <div className={classNames(styles.flatItem__container)}>
                    <Slider imgs={currentFlat.images}/>
                    <User/>
                </div>
            </div>
        </div>
    </div>);
}


let mapStateToProps = (state) => ({
    flats: state.flatCollectionPage.flats,
})
export default compose(connect(mapStateToProps, {}), withRouter)(ShowBigFlatItem);
