import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import { geocodeReducer } from "./geocoder-reducer";
// import {searchSchoolReducer} from "./search-schools-reducer";


const rootReducer = combineReducers({
    cityCoordinates: geocodeReducer,
    // schoolItems: searchSchoolReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;
