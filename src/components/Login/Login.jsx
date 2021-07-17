import React from 'react';
import styles from "./Login.module.css";
import classNames from 'classnames';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {logInCreator} from "../../rudux/users-reducer";
import {compose} from "redux";
import {loginRedirect} from "../../hoc/loginRedirect";


const LoginForm = (props) => {

    return (<form className={classNames(styles.login__form)} onSubmit={props.handleSubmit}>

        <p className={classNames(styles.login__inputCredentials)}>Пожалуйста, введите свой логин и пароль</p>

        <div className={classNames(styles.form)}>
            <Field className={classNames(styles.form__input)} placeholder={'Введите логин'} name={'login'}
                   component={'input'}/>
            <Field className={classNames(styles.form__input)} placeholder={'Введите пароль'} name={'password'}
                   component={'input'}/>

            <button className={classNames(styles.form__btn)}>Войти</button>
        </div>

        <div className={classNames(styles.testCredentials)}>
            <h3>Test account</h3>
            <p>login: <span>12345</span></p>
            <p>password: <span>0000</span></p>
        </div>

    </form>);
}


const Login = (props) => {
    const onSubmit = (formData) => {
        props.logInCreator(formData);
    }

    return (<div className={classNames(styles.login)}>
        <div className={classNames(styles.login__wrapper)}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    </div>);
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

let mapStateToProps = (state) => ({})

export default compose(connect(mapStateToProps, {logInCreator}), loginRedirect)(Login);


