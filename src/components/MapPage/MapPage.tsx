import React from 'react';
import {Map, YMaps} from "react-yandex-maps";
import {SearchModule} from "../SearchModule/SearchModule";

type PropsType = {

}

export const MapPage = React.memo((props: PropsType) => {



    return (
        <div>
            <SearchModule/>
            <YMaps>
                <div style={{height: '100vh', width: '100%'}}>
                    <Map defaultState={{center: [53.90, 27.56], zoom: 12}} width={'100%'} height={'100vh'}>
                    </Map>
                </div>
            </YMaps>
        </div>
    )
})



