import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import Home from './components/home';
import Instructores from './components/instructores';
import Alumnos from './components/alumnos';
import Error from './components/error';
import Menu from './components/menu'
import Clases from './components/clases'
import AddAlumno from './components/addAlumno';
import AddInstructor from './components/addInstructor';
import AddClases from './components/addClases';
import InfoClase from './components/infoClase';
import InfoInstructor from './components/infoInstructor';
import InfoAlumno from './components/infoAlumno';
import Pagos from './components/pagos';
import AddPago from './components/addPago';



export default class App extends Component {

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
                    alumno_id ={alumnoId}
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
              
              <Route exact path="/pagosAlumno/:alumnoId" render={(props) => {
                let alumnoId = props.location.pathname.replace('/pagosAlumno/', '');

                return (
                  <Pagos
                    alumno_id ={alumnoId}
                    instructor_id ={0}
                  />
                )
              }}/>
              <Route exact path="/pagosInstructor/:instructorid" render={(props) => {
                let instructorId = props.location.pathname.replace('/pagosInstructor/', '');

                return (
                  <Pagos
                    alumno_id ={0}
                    instructor_id ={instructorId}
                  />
                )
              }}/>

              <Route exact path="/addInstructorPago/:instructorid" render={(props) => {
                let instructorId = props.location.pathname.replace('/addInstructorPago/', '');

                return (
                  <AddPago
                    alumno_id ={0}
                    instructor_id ={instructorId}
                  />
                )
              }}/>

              <Route exact path="/addAlumnoPago/:alumnoId" render={(props) => {
                let alumnoId = props.location.pathname.replace('/addAlumnoPago/', '');

                return (
                  <AddPago
                    instructorId ={0}
                    alumno_id ={alumnoId}
                  />
                )
              }}/>
              <Route component={Error} />
            </Switch>

          
          </BrowserRouter>
            
        );
    }
}
