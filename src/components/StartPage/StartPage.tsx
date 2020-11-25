import React from 'react';
import { SearchModule } from '../SearchModule/SearchModule';
import style from './StartPage.module.css'

export const StartPage = React.memo(() => {

    return (
        <div className={style.wrapper}>
            <h1>IT школы вашего города</h1>
            <p>Для начала работы введите страну и город в котором вы хотите найти IT школы</p>
            <SearchModule/>
        </div>
    )
})

