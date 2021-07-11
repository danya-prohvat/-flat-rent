import {combineReducers, createStore} from "redux";
import flatCollection from "./flatCollection-reducer";


let reducers = combineReducers({
    flatCollectionPage: flatCollection
});



let store = createStore(reducers);


export default store;