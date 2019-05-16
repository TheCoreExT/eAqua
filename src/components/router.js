import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Instructores from './instructores';
import Alumnos from './alumnos';
import Error from './error';
import Menu from './menu'
import Clases from './clases'
import AddAlumno from './addAlumno';
import AddInstructor from './addInstructor';


export default class Routes extends Component {


    render() {
        return (
          <BrowserRouter>
            <Header />
            <Menu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/instructores" component={Instructores} />
              <Route exact path="/alumnos" component={Alumnos} />
              <Route exact path="/clases" component={Clases} />
              <Route exact path="/addAlumno" component={AddAlumno} />
              <Route exact path="/addInstructor" component={AddInstructor} />

              <Route component={Error} />
            </Switch>

          
          </BrowserRouter>
        );
    }
}