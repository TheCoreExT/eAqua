import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './css/clases.css';
import Nalumnos from './nalumnos';

export default class Clases extends Component {

    state = {clases: []}

    componentDidMount() {
      fetch("/login/clases")
        .then(res => res.json())
        .then(clases =>
          this.setState({ clases })
        );
    }
    alert() {
      alert("Clase eliminado");
    }

    render() {
        return (
          <div className="Clases">

            <div className="HubClases">
              <h2>Clases</h2>
              <input type="search" id="search" placeholder="Buscar" />
                <Link to="/AddClases">
                <img src =  "/img/Add.png " alt = "Clases" height="50px"></img>
                </Link>
            </div>

            <table>
              <tr>
                <th scope="col" className="Instructor" > Instructor </th>
                <th scope="col" className="Día"> Día </th>
                <th scope="col" className="Hora"> Hora Inicial </th>
                <th scope="col" className="Hora"> Hora Final </th>
                <th scope="col" className="NoAlumno"> No. Alumnos </th>
                <th scope="col" className="DetallesClases"> </th>
                <th scope="col" className="EditarClases"> </th>
                <th scope="col" className="EliminarClases"> </th>
              </tr>
              {this.state.clases.map(clase => (
                <tr key={clase.id}>
                  <td>{clase.instructor_nombre}</td>
                  <td>{clase.dia}</td>
                  <td>{clase.hora_inicial}</td>
                  <td>{clase.hora_final}</td>
                  <td><Nalumnos clase_id = {clase.id} /></td>
                  <td>
                    <Link to={"/clases/" + clase.id}>
                      <button className="DetallesClase">Detalles</button>
                    </Link>
                  </td>
                  
                  <td>
                    <Link to={"/editClase/"+clase.id}>
                    <button type="submit" className ="EditarClase"name="editar_id" value={clase.id}> </button>
                    </Link>
                  </td>

                  <td>
                    <form method="post" action="/login/eliminarClase" name="eliminarClase">
                    <button type="submit" className="EliminarClase"onClick={() => {alert("Clase Eliminada")}} name="clase_id"  value={clase.id}> X </button>
                    </form>
                  </td>
                </tr>
            ))}
            </table>
          </div>

        );
    }
}

