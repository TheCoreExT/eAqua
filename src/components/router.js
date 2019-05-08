import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Instructores from './instructores';
import Alumnos from './alumnos';
import Error from './error';
import Menu from './menu'
import Clases from './clases'


export default class Routes extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Menu />
                <h1>eAqua</h1>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/instructores" component={Instructores} />
                    <Route exact path="/alumnos" component={Alumnos} />
                    <Route exact path="/clases" component={Clases} />
                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}