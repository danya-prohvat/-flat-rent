import React from 'react';
import styles from "./ShowBigFlatItem.module.css";
import classNames from 'classnames';
import {Field, reduxForm} from "redux-form";
import normalizeNumberInput from "../../Utils/normalizeNumberInput";

const EditData = (props) => {

    let citiesOptionElements = [];
    props.citiesSet.forEach((value, key) => citiesOptionElements.push(<option key={key} value={value}>{value}</option>));

    return (<form onSubmit={props.handleSubmit}>
        <div className={classNames(styles.form__mainInfo)}>
            <Field className={classNames(styles.form__input, styles.form__title)} placeholder={'Название'}
                   name={'title'}
                   component={'input'}/>
            <Field className={classNames(styles.form__input, styles.form__price)} normalize={normalizeNumberInput}
                   placeholder={'Цена (в грн.)'} name={'price'}
                   component={'input'}/>
        </div>
        <div className={classNames(styles.form__city)}>
                <p>Город: </p>

            <Field className={classNames(styles.form__select)} name="city" component={'select'}>
                {citiesOptionElements}
            </Field>

        </div>
        <div className={classNames(styles.form__rooms)}>
            <p>Комнат: </p>

            <Field className={classNames(styles.form__select)} name="rooms" component={'select'}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Field>

        </div>
        <div className={classNames(styles.form__squareMeter)}>
            <p>Метраж: </p>
            <Field className={classNames(styles.form__input, styles.form__squareMeterField)}
                   normalize={normalizeNumberInput}
                   placeholder={'в м2.'} name={'squareMeter'}
                   component={'input'}/>
        </div>
        <div className={classNames(styles.form__withFurnitures)}>
            <Field className={classNames(styles.form__fieldCheckbox)} name="editWithFurnitures"
                   component={'input'} type="checkbox"/>
            <label htmlFor="editWithFurnitures">С мебелью</label>
        </div>
        <button className={classNames(styles.flatItem__button)}>Сохранить</button>
    </form>);
}

export default reduxForm({form: 'editData'})(EditData);

