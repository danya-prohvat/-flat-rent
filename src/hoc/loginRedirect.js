import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToProps = (state) => ({
    authorized: state.usersPage.authorized
});

export const loginRedirect = (Component) => {
    const loginRedirectComponent = (props) => {
        return (
            props.authorized ? <Redirect to={"/"} /> : <Component {...props} />
        );
    }

    const loginRedirectContainerComponent = connect(mapStateToProps,{})(loginRedirectComponent);
    return loginRedirectContainerComponent;
}