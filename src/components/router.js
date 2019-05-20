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
import AddClases from './addClases';
import InfoClase from './infoClase';
import InfoInstructor from './infoInstructor';
import InfoAlumno from './infoAlumno';


export default class Routes extends Component {


    render() {
        return (
          <BrowserRouter>
            <Header />
            <Menu />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/instructores" component={Instructores} />
              <Route exact path="/instructores/:instructorId" render={(props) => {
                let instructorId = props.location.pathname.replace('/instructores/', '');

                return (
                  <InfoInstructor
                    instructor_id ={instructorId}
                  />
                )
              }} />
              <Route exact path="/alumnos" component={Alumnos} />
              <Route exact path="/alumnos/:alumnoId" render={(props) => {
                let alumnoId = props.location.pathname.replace('/alumnos/', '');

                return (
                  <InfoAlumno
                    clase_id ={alumnoId}
                  />
                )
              }}/>
              <Route exact path="/clases" component={Clases} />
              <Route exact path="/clases/:claseId" render={(props) => {
                let claseId = props.location.pathname.replace('/clases/', '');

                return (
                  <InfoClase
                    clase_id ={claseId}
                  />
                )
              }}/>
              <Route exact path="/addAlumno" component={AddAlumno} />
              <Route exact path="/addInstructor" component={AddInstructor} />
              <Route exact path="/addClases" component={AddClases} />
              <Route component={Error} />
            </Switch>

          
          </BrowserRouter>
        );
    }
}


