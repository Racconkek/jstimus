import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';

import Home from './components/Home.jsx';
import Navigation from "./components/Navigation/Navigation.jsx";
import DataService from "./dataService/dataService.js";
import Task from "./components/Tasks/Task.jsx";

export default class App extends React.Component{

    constructor() {
        super();
        this.state = {
            configs: null
        }
    }

    componentDidMount() {
        DataService.getTaskConfigs()
            .then((res) => {
                const results = JSON.parse(res);
                // console.log(results.tasks);
                this.setState({configs: results.tasks});
            })
            .catch((error) => console.error(error));
    }

    render() {
        return <div className={'App'}>
            <BrowserRouter>
                <Navigation tasks={this.state.configs}/>
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    {this.state.configs && this.state.configs.map(item =>
                        <Route key={item.taskName} path={item.link}><Task task={item}/></Route>)}
                </Switch>
            </BrowserRouter>
        </div>
    }
}



