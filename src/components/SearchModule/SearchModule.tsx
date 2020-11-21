import React, {ChangeEvent, useCallback, useState} from 'react';
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";


export const SearchModule = React.memo(() => {

    const [country, setCountry] = useState<string>('');
    const [city, setCity] = useState<string>('');

    const setCountryCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setCountry(e.currentTarget.value),
        [setCountry]);

    const setCityCallback = useCallback((e: ChangeEvent<HTMLInputElement>) => setCity(e.currentTarget.value),
        [setCity]);

const   onSearch = () => {
    console.log(country + ' ' + city)
}

    return (
        <div>
            <Input placeholder={'Страна'} onChange={setCountryCallback} value={country}/>
            <Input placeholder={'Город'} onChange={setCityCallback} value={city}/>
            <Button name='Найти' onClick={onSearch}/>
        </div>
    )
})



