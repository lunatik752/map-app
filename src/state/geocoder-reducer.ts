import {getCoordinate} from "../api/geocoder-api";
import {getSchoolsApi} from "../api/search-org-api";
//
// type GeometryType = {
//     coordinates: Array<number>
//     type: string
// }
//
// type CategoriesType = {
//     class: string
//     name: string
// }
//
// type PhonesType = {
//     formatted: string
//     type: string
// }
//
// type CompanyMetaDataType = {
//     Categories: Array<CategoriesType>,
//     Hours: {
//         Availabilities: []
//         text: string
//     },
//     Phones: Array<PhonesType>
//     address: string
//     id: string
//     name: string
//     url: string
// }
//
// type BoundedByType = Array<number>
//
// type PropertiesType = {
//     CompanyMetaData: CompanyMetaDataType
//     boundedBy: Array<BoundedByType>
//     description: string
//     name: string
//
// }
//
// type SchoolType = {
//     geometry: GeometryType
//     properties: PropertiesType
//     name: string
//     type: string
// }

export type SchoolType =
    {
        geometry: {
            coordinates: Array<number>
            type: string
        },
        properties: {
            CompanyMetaData: {
                Categories: Array<{
                    class: string
                    name: string
                }>
                Hours: {
                    Availabilities: []
                    text: string
                }
                Phones: Array<{
                    formatted: string
                    type: string
                }>

                address: string
                id: string
                name: string
                url: string
            }
            boundedBy: Array<Array<number>>
            description: string
            name: string
        }
        type: string
    }


type InitialStateType = {
    cityCoordinates: Array<number>,
    schools: Array<SchoolType>
}

// export type InitialStateType = typeof initialState


const initialState: InitialStateType = {
    cityCoordinates: [53.90, 27.56],
    schools: [
        {
            geometry: {
                coordinates: [1, 2],
                type: ''
            },
            properties: {
                CompanyMetaData: {
                    Categories: [
                        {
                            class: '',
                            name: ''
                        }
                    ],
                    Hours: {
                        Availabilities: [],
                        text: ''
                    },
                    Phones: [
                        {
                            formatted: '',
                            type: "phone"
                        }
                    ],
                    address: '',
                    id: '',
                    name: '',
                    url: ''
                },
                boundedBy: [
                    [1, 2],
                    [27.523996, 53.9096525]
                ],
                description: '',
                name: ''
            },
            type: ''
        }
    ]
}

export const geocodeReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'GET_CITY_COORDINATES':
            const arr = ['средняя', 'гимназия']
            const value = new RegExp(arr.join('|'), 'i')
            return {
                ...state,
                cityCoordinates: action.value,
                schools: action.schools.filter(s => !s.properties.name.toLowerCase().match(value)).map((s) => ({
                    ...s,
                    coordinates: s.geometry.coordinates.reverse()
                }))
            }
        default :
            return state;
    }
}

// action types
type ActionType = ReturnType<typeof addCityCoordinates>

// action creators
export const addCityCoordinates = (value: Array<number>, schools: Array<any>) => ({
    type: 'GET_CITY_COORDINATES',
    value,
    schools
} as const)

// Thunk

export const getCityCoordinates = (country: string, city: string) => async (dispatch: any) => {
    debugger
    const result1 = await getCoordinate(country + ' ' + city)
    const result2 = await getSchoolsApi(country + ' ' + city)

    dispatch(addCityCoordinates(result1.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ').reverse().map((el: string) => +el), result2.features))
}

