import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header'

export default class Routes extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <p>Hola</p>
                <Switch>

                </Switch>
            </BrowserRouter>
        );
    }
}