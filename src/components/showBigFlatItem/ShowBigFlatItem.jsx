import React, {useState} from 'react';
import styles from "./ShowBigFlatItem.module.css";
import classNames from 'classnames';
import {NavLink, withRouter} from "react-router-dom";
import backArrow from '../../assets/backArrow.svg';
import {connect} from "react-redux";
import {compose} from "redux";
import Slider from "./Slider/Slider";
import User from "./User/User";
import WatchData from "./WatchBigFlatItemData";
import EditForm from "./EditBigFlatItemData";
import {updateFlatsServerCreator} from "../../rudux/flatCollection-reducer";


const ShowBigFlatItem = (props) => {

    const [currentFlat] = props.flats.filter(el => el.id == props.match.params.flatId);

    const [editMode, setEditMode] = useState(false);

    const saveBtnOnClick = () => setEditMode(false);
    const editBtnOnClick = () => setEditMode(true);

    const onSubmit = formData => {
        props.updateFlatsServerCreator({...formData, id: currentFlat.id});
        saveBtnOnClick();
    }

    return (<div className={classNames(styles.showBigFlatItem)}>
        <div className={classNames(styles.showBigFlatItem__wrapper)}>
            <NavLink className={classNames(styles.back)} to="/"><img src={backArrow}
                                                                     alt=""/><span>назад</span></NavLink>
            <div className={classNames(styles.flatItem)}>
                <div className={classNames(styles.flatItem__header)}>

                    {editMode ? <EditForm initialValues={{
                            title: currentFlat.title,
                            price: currentFlat.price,
                            editWithFurnitures: currentFlat.description.withFurnitures,
                            squareMeter: currentFlat.description.squareMeter,
                            rooms: currentFlat.description.rooms,
                            city: currentFlat.location
                        }} onSubmit={onSubmit} citiesSet={props.citiesSet}/> :
                        <WatchData currentFlat={currentFlat}/>}

                    {(!editMode && currentFlat.author == props.authorizedPerson) &&
                    <button className={classNames(styles.flatItem__button)}
                            onClick={editBtnOnClick}>Редактировать</button>}
                </div>
                <div className={classNames(styles.flatItem__container)}>
                    <Slider imgs={currentFlat.images}/>
                    <User author={currentFlat.author} authorizedPerson={props.authorizedPerson}/>
                </div>
            </div>
        </div>
    </div>);
}


let mapStateToProps = (state) => ({
    flats: state.flatCollectionPage.flats,
    citiesSet: state.flatCollectionPage.citiesSet,
    authorizedPerson: state.usersPage.authorizedPerson,
})
export default compose(connect(mapStateToProps, {updateFlatsServerCreator}), withRouter)(ShowBigFlatItem);
