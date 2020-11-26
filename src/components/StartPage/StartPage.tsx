import React, {useCallback} from 'react';
import { SearchModule } from '../SearchModule/SearchModule';
import style from './StartPage.module.css'
import {useSelector} from "react-redux";
import { AppRootStateType } from '../../state/store';
import {SchoolType} from "../../state/geocoder-reducer";
import { Redirect } from 'react-router-dom';

export const StartPage = React.memo(() => {

    const schools = useSelector<AppRootStateType, Array<SchoolType>>(state => state.cityCoordinates.schools)

    if (schools.length !== 0) {return <Redirect to={'/mapPage'}/>}

    return (
        <div className={style.wrapper}>
            <h1>IT школы вашего города</h1>
            <p>Для начала работы введите страну и город в котором вы хотите найти IT школы</p>
            <SearchModule/>
        </div>
    )
})

