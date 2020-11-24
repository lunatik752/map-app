import React from 'react';
import { SearchModule } from '../SearchModule/SearchModule';
import style from './StartPage.module.css'

export const StartPage = React.memo(() => {

    return (
        <div className={style.wrapper}>
            <SearchModule/>
        </div>
    )
})

