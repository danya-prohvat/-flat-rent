import React from 'react';
import styles from "./FlatFilter.module.css";
import classNames from 'classnames';
import {Field, reduxForm} from "redux-form";
import normalizeNumberInput from "../../../Utils/normalizeNumberInput";


const FlatFilterForm = (props) => {

    let citiesOptionElements = [];
    props.citiesSet.forEach((value, key) => citiesOptionElements.push(<option key={key} value={key}>{value}</option>));


    return (<form className={classNames(styles.flatFilterForm)} onSubmit={props.handleSubmit}>

        <div className={classNames(styles.flatFilterForm__inputBlock)}>
            <h3>Цена (грн.)</h3>
            <Field className={classNames(styles.flatFilterForm__fieldInput)} normalize={normalizeNumberInput}
                   placeholder={'От'} name={'minPrice'} component={'input'}/>
            <Field className={classNames(styles.flatFilterForm__fieldInput)} normalize={normalizeNumberInput}
                   placeholder={'До'} name={'maxPrice'} component={'input'}/>
        </div>
        <div className={classNames(styles.flatFilterForm__inputBlock)}>
            <h3>Общая площадь (м2)</h3>
            <Field className={classNames(styles.flatFilterForm__fieldInput)} normalize={normalizeNumberInput}
                   placeholder={'От'} name={'minArea'} component={'input'}/>
            <Field className={classNames(styles.flatFilterForm__fieldInput)} normalize={normalizeNumberInput}
                   placeholder={'До'} name={'maxArea'} component={'input'}/>
        </div>

        <div className={classNames(styles.flatFilterForm__checkboxBlock)}>
            <Field className={classNames(styles.flatFilterForm__fieldCheckbox)} name="withFurnitures"
                   component={'input'} type="checkbox"/>
            <label htmlFor="withFurnitures">С мебелью</label>
        </div>

        <div className={classNames(styles.flatFilterForm__selectBlock)}>
            <h3>Комнат</h3>
            <Field className={classNames(styles.flatFilterForm__fieldSelect)} name="rooms" component={'select'}>
                <option></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Field>
        </div>
        <div className={classNames(styles.flatFilterForm__selectBlock)}>
            <h3>Город</h3>
            <Field className={classNames(styles.flatFilterForm__fieldSelect)} name="location" component={'select'}>
                <option></option>
                {citiesOptionElements}
            </Field>
        </div>

        <div>
            <button className={classNames(styles.flatFilterForm__btn)}>Поиск</button>
        </div>

    </form>);
}

const FlatFilterReduxForm = reduxForm({form: 'flatFilter'})(FlatFilterForm);


const FlatFilter = (props) => {

    const onSubmit = (formData) => {
        props.filterCreator(formData);
    }

    return (<div className={classNames(styles.flatFilter)}>
        <FlatFilterReduxForm onSubmit={onSubmit} citiesSet={props.citiesSet}/>
    </div>);
}


export default FlatFilter;