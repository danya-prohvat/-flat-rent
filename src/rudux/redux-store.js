import {combineReducers, createStore} from "redux";
import flatCollection from "./flatCollection-reducer";
import {reducer as formReducer} from "redux-form"


let reducers = combineReducers({
    flatCollectionPage: flatCollection,

    form: formReducer
});



let store = createStore(reducers);


export default store;