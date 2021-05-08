import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';

import Home from './components/Home.jsx';
import Navigation from "./components/Navigation/Navigation.jsx";
import RLE from "./components/Tasks/RLE.jsx";
import Entropy from "./components/Tasks/Entropy.jsx";

export default function App() {
    return <div className={'App'}>
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/tasks/RLE'}>
                    <RLE/>
                </Route>
                {/*<Route path={'/tasks/Entropy'}>*/}
                {/*    <Entropy/>*/}
                {/*</Route>*/}
            </Switch>
        </BrowserRouter>
    </div>
}



