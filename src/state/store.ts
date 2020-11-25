
import thunk from "redux-thunk";
import { geocodeReducer } from "./geocoder-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
// import {searchSchoolReducer} from "./search-schools-reducer";


const rootReducer = combineReducers({
    cityCoordinates: geocodeReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;
