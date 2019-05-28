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
import MenuPagos from './components/menuPagos';
import EditAlumno from './components/editAlumno';
import EditInstructor from './components/editInstructor';
import EditClase from './components/editClase';
import Login from './components/login';

export default class App extends Component {
  state =  {loggedin: true}
  
  componentDidMount() {
    fetch('https://157.230.165.99:3001/login')
    .then(res => res.json())
    .then(loggedin => this.setState({ loggedin }))
  }
    

    render() {
        
      
      return (
        <BrowserRouter>
            <Header />
            <Menu />
            <Switch>
              <Route exact path="/home" component={Home} />;
              <Route
                exact
                path="/instructores"
                component={Instructores}
              />
              
              <Route
                exact
                path="/instructores/:instructorId"
                render={props => {
                  let instructorId = props.location.pathname.replace(
                    "/instructores/",
                    ""
                    );
                    
                    return (
                      <InfoInstructor instructor_id={instructorId} />
                      );
                    }}
              />
              
              <Route exact path="/alumnos" component={Alumnos} />
              <Route
                exact
                path="/alumnos/:alumnoId"
                render={props => {
                  let alumnoId = props.location.pathname.replace(
                    "/alumnos/",
                    ""
                    );
                    
                    return <InfoAlumno alumno_id={alumnoId} />;
                  }}
              />
              
              <Route exact path="/clases" component={Clases} />
              <Route
                exact
                path="/clases/:claseId"
                render={props => {
                  let claseId = props.location.pathname.replace(
                    "/clases/",
                    ""
                    );
                    
                    return <InfoClase clase_id={claseId} />;
                  }}
              />
              
              <Route exact path="/addAlumno" component={AddAlumno} />
              <Route
                exact
                path="/addInstructor"
                component={AddInstructor}
              />
              
              <Route exact path="/addClases" component={AddClases} />
              <Route
                exact
                path="/pagosAlumno/:alumnoId"
                render={props => {
                  let alumnoId = props.location.pathname.replace(
                    "/pagosAlumno/",
                    ""
                    );
                    
                    return (
                      <Pagos alumno_id={alumnoId} instructor_id={0} />
                      );
                    }}
              />
              
              <Route
                exact
                path="/pagosInstructor/:instructorid"
                render={props => {
                  let instructorId = props.location.pathname.replace(
                    "/pagosInstructor/",
                    ""
                    );
                    
                    return (
                      <Pagos alumno_id={0} instructor_id={instructorId} />
                      );
                    }}
              />
              
              <Route
                exact
                path="/addInstructorPago/:instructorid"
                render={props => {
                  let instructorId = props.location.pathname.replace(
                    "/addInstructorPago/",
                    ""
                    );
                    
                    return (
                      <AddPago
                      alumno_id={0}
                      instructor_id={instructorId}
                      />
                      );
                    }}
              />
              
              <Route
                exact
                path="/addAlumnoPago/:alumnoId"
                render={props => {
                  let alumnoId = props.location.pathname.replace(
                    "/addAlumnoPago/",
                    ""
                    );
                    
                    return (
                      <AddPago instructorId={0} alumno_id={alumnoId} />
                      );
                    }}
              />
              
              <Route
                exact
                path="/editAlumno/:alumnoId"
                render={props => {
                  let alumnoId = props.location.pathname.replace(
                    "/editAlumno/",
                    ""
                    );
                    
                    return <EditAlumno alumno_id={alumnoId} />
                  }}
              />
              
              <Route
                exact
                path="/editInstructor/:instructorId"
                render={props => {
                  let instructorId = props.location.pathname.replace(
                    "/editInstructor/",
                    ""
                    );
                    
                    return (
                      <EditInstructor instructor_id={instructorId} />
                      );
                    }}
              />
              
              <Route
                exact
                path="/editClase/:claseId"
                render={props => {
                  let claseId = props.location.pathname.replace(
                    "/editClase/",
                    ""
                    );
                    
                    return <EditClase clase_id={claseId} />
                  }}
              />
              
              <Route exact path="/pagos" component={MenuPagos} />
              <Route exact path="/" component={Login}/>
              <Route component={Error} />
            </Switch>
          </BrowserRouter>
        );
      }
    }
    