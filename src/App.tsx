import React from 'react';
import './App.css';
import {MapPage} from './components/MapPage/MapPage';
import {SearchModule} from "./components/SearchModule/SearchModule";
import Routes from "./main/routes/Routes";
import {StartPage} from "./components/StartPage/StartPage";


const App = React.memo(() => {

    return (
        <div>
            <Routes/>
        </div>
    )
})

export default App;
