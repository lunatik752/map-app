import React, {useEffect} from 'react';
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useSelector} from "react-redux";
import {AppRootStateType} from '../../state/store';

type PropsType = {}

export const MapPage = React.memo((props: PropsType) => {

    const coordinate = useSelector<AppRootStateType, Array<number>>(state => state.cityCoordinates.cityCoordinates)
    const schoolsItems = useSelector<AppRootStateType, Array<any>>(state => state.cityCoordinates.schools)
debugger

    console.log(schoolsItems)

    return (
        <div>
            <YMaps>
                <div style={{height: '100vh', width: '100%'}}>
                    <Map state={{center: coordinate, zoom: 12}} width={'100%'} height={'100vh'}>
                        {schoolsItems.map((school) => <Placemark  geometry={school.geometry.coordinates} properties={{
                            iconCaption: school.properties.name,
                        }}/>)}
                    </Map>
                </div>
            </YMaps>
        </div>
    )
})

// key={school.properties.CompanyMetaData.id}


