import React, {useCallback, useState} from 'react';
import './App.css';
import {Map, Placemark, SearchControl, YMaps} from "react-yandex-maps";
import {getDataRequest} from "./api/api";

const App = () => {


    const getData = useCallback(async () => {
        const res = await getDataRequest('минск')
        console.log(res)
}, [])

    return (
        <div className="App">
            <YMaps>
                <div>My awesome application with maps!</div>
                <div style={{height: '100vh', width: '100%'}}>
                    <Map defaultState={{center: [53.90, 27.56], zoom: 12}} width={'100%'} height={'100vh'}>
                        <SearchControl options={{ float: 'right' }} />
                        <Placemark geometry={[53.917501, 27.604851]}/>
                    </Map>
                </div>
            </YMaps>
        </div>
    )
}


export default App;
