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

    // componentDidMount() {
    //   fetch('https://157.230.165.99:3001/login')
    //   .then(res => res.json())
    //   .then(loggedin => this.setState({ loggedin }));

    // }

    render() {

      if(this.state.loggedin === true){
        var header = <Header />;
        var menu = <Menu />; 
        var home = <Route exact path="/" component={Home} />;
        var instructores = <Route exact path="/instructores" component={Instructores} />;
        var infoInstructor = <Route exact path="/instructores/:instructorId" render={(props) => {
          let instructorId = props.location.pathname.replace('/instructores/', '');

          return (
            <InfoInstructor
              instructor_id ={instructorId}
            />
          )
        }} />;
        var alumnos = <Route exact path="/alumnos" component={Alumnos} />;
        var infoAlumno = <Route exact path="/alumnos/:alumnoId" render={(props) => {
          let alumnoId = props.location.pathname.replace('/alumnos/', '');

          return (
            <InfoAlumno
              alumno_id ={alumnoId}
            />
          )
        }}/>;
        var clases = <Route exact path="/clases" component={Clases} />;
        var infoClase = <Route exact path="/clases/:claseId" render={(props) => {
          let claseId = props.location.pathname.replace('/clases/', '');

          return (
            <InfoClase
              clase_id ={claseId}
            />
          )
        }}/>;
        var addAlumno = <Route exact path="/addAlumno" component={AddAlumno} />;
        var addInstructor = <Route exact path="/addInstructor" component={AddInstructor} />;
        var addClase = <Route exact path="/addClases" component={AddClases} />;
        var pagosAlumno = <Route exact path="/pagosAlumno/:alumnoId" render={(props) => {
          let alumnoId = props.location.pathname.replace('/pagosAlumno/', '');

          return (
            <Pagos
              alumno_id ={alumnoId}
              instructor_id ={0}
            />
          )
        }}/>;
        var pagosInstructor =<Route exact path="/pagosInstructor/:instructorid" render={(props) => {
          let instructorId = props.location.pathname.replace('/pagosInstructor/', '');

          return (
            <Pagos
              alumno_id ={0}
              instructor_id ={instructorId}
            />
          )
        }}/>;
        var addInstructorPago = <Route exact path="/addInstructorPago/:instructorid" render={(props) => {
          let instructorId = props.location.pathname.replace('/addInstructorPago/', '');

          return (
            <AddPago
              alumno_id ={0}
              instructor_id ={instructorId}
            />
          )
        }}/>;
        var addAlumnoPago = <Route exact path="/addAlumnoPago/:alumnoId" render={(props) => {
          let alumnoId = props.location.pathname.replace('/addAlumnoPago/', '');

          return (
            <AddPago
              instructorId ={0}
              alumno_id ={alumnoId}
            />
          )
        }}/>;
        var editAlumno = <Route exact path="/editAlumno/:alumnoId" render={(props) => {
          let alumnoId = props.location.pathname.replace('/editAlumno/', '');

          return (
            <EditAlumno
              alumno_id ={alumnoId}
            />
          )
        }}/>;
        var editInstructor = <Route exact path="/editInstructor/:instructorId" render={(props) => {
          let instructorId = props.location.pathname.replace('/editInstructor/', '');

          return (
            <EditInstructor
              instructor_id ={instructorId}
            />
          )
        }}/>;
        var editClase = <Route exact path="/editClase/:claseId" render={(props) => {
          let claseId = props.location.pathname.replace('/editClase/', '');

          return (
            <EditClase
              clase_id ={claseId}
            />
          )
        }}/>;
        var pagos = <Route exact path="/pagos" component={MenuPagos} />;




      }
      else{
          var login = <Route exact path="/" component={Login}/>;
      }

        return (
          <BrowserRouter>
          {header}
          {menu}
          <Switch>
            {login}
            {home}
            {instructores}
            {infoInstructor}
            {alumnos}
            {infoAlumno}
            {clases}
            {infoClase}
            {addAlumno}
            {addInstructor}
            {addClase}
            {pagosAlumno}
            {pagosInstructor}
            {addInstructorPago}
            {addAlumnoPago}
            {editAlumno}
            {editInstructor}
            {editClase}
            {pagos}

            <Route component={Error} />
          </Switch>
        </BrowserRouter>
            
        );
    }
}
