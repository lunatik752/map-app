import React from "react";
import {Route, Switch} from "react-router-dom";
import {Page404} from "../../common/Page404/Page404";
import {StartPage} from "../../components/StartPage/StartPage";
import {MapPage} from "../../components/MapPage/MapPage";


const Routes: React.FC = () => {
    return (
        <Switch>
            <Route  path={'/'} render={() => <StartPage/>}/>
            <Route  path={'/mapPage'} render={() => <MapPage/>}/>
            <Route path={'*'} render={() => <Page404/>}/>
        </Switch>
    );
};

export default Routes;
