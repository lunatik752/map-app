import {getCoordinate} from "../api/geocoder-api";
import {getSchoolsApi} from "../api/search-org-api";

type GeometryType = {
    coordinates: Array<number>
    type: string
}

type SchoolType = {
    geometry: GeometryType
    properties: any
    type: string
}

type InitialStateType = {
    cityCoordinates: Array<number>,
    schools: Array<SchoolType>
}


const initialState = {
    cityCoordinates: [53.90, 27.56],
    schools: [{
        geometry: {
            coordinates: [1, 2],
                type: ''
        },
        properties: {},
        type: ''
    }]
}

export const geocodeReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'GET_CITY_COORDINATES':
            const arr = ['средняя', 'гимназия']
            const value = new  RegExp(arr.join('|'), 'i')
            return {...state,
                cityCoordinates: action.value,
                schools: action.schools.filter(s => !s.properties.name.toLowerCase().match(value)).map((s)  => ({...s, coordinates: s.geometry.coordinates.reverse()}))
            }
        default :
            return state;
    }
}

// action types
type ActionType = ReturnType<typeof addCityCoordinates>

// action creators
export const addCityCoordinates = (value: Array<number>, schools: Array<any>) => ({type: 'GET_CITY_COORDINATES', value, schools} as const)

// Thunk

export const getCityCoordinates = (country: string, city: string) => async (dispatch: any) => {
    debugger
    const result1 = await getCoordinate(country + ' ' + city)
    const result2 = await getSchoolsApi(country + ' ' + city)

    dispatch(addCityCoordinates(result1.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().map((el: string) => +el), result2.features))
}

