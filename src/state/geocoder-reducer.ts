import {Dispatch} from "redux";
import {getCoordinate} from "../api/geocoder-api";

type InitialStateType = typeof initialState

const initialState = {
    cityCoordinates: [53.90, 27.56]
}

export const geocodeReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'GET_CITY_COORDINATES':
            return {...state, cityCoordinates: action.value}
        default :
            return state;
    }
}

// action types
type ActionType = ReturnType<typeof addCityCoordinates>

// action creators
export const addCityCoordinates = (value: Array<number>) => ({type: 'GET_CITY_COORDINATES', value} as const)


// Thunk

export const getCityCoordinates = ( country: string, city: string) => (dispatch: Dispatch) => {
    getCoordinate( country + ' ' + city).then(
        res => {
            console.log(res.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().map((el: string) => +el))
            dispatch(addCityCoordinates(res.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().map((el: string) => +el)))
        }
    )
}
