import React from "react";
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useSelector} from "react-redux";
import {AppRootStateType} from '../../state/store';
import {SchoolType} from "../../state/geocoder-reducer";
import {SearchModule} from "../SearchModule/SearchModule";

type PropsType = {}

export const MapPage = React.memo((props: PropsType) => {

    const coordinate = useSelector<AppRootStateType, Array<number>>(state => state.cityCoordinates.cityCoordinates)
    const schoolsItems = useSelector<AppRootStateType, Array<SchoolType>>(state => state.cityCoordinates.schools)


    console.log(schoolsItems)

    return (
        <div>
            <SearchModule/>
            <YMaps>
                <div style={{height: '100vh', width: '100%'}}>
                    <Map state={{center: coordinate, zoom: 12}} width={'100%'} height={'100vh'}>
                        {schoolsItems.map((school) => <Placemark key={school.properties.CompanyMetaData.id} geometry={school.geometry.coordinates} properties={{
                            iconCaption: school.properties.name,
                        }}/>)}
                    </Map>
                    {schoolsItems.length}
                </div>
            </YMaps>
        </div>
    )
})




