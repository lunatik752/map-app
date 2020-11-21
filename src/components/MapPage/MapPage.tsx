import React from 'react';
import {Map, YMaps} from "react-yandex-maps";
import {useSelector} from "react-redux";
import { AppRootStateType } from '../../state/store';

type PropsType = {

}

export const MapPage = React.memo((props: PropsType) => {

const coordinate = useSelector<AppRootStateType, Array<number>>(state => state.cityCoordinates.cityCoordinates)
    console.log(coordinate);

    return (
        <div>
            <YMaps>
                <div style={{height: '100vh', width: '100%'}}>
                    <Map state={{center: coordinate, zoom: 12}} width={'100%'} height={'100vh'}>
                    </Map>
                </div>
            </YMaps>
        </div>
    )
})



