import React,{Component} from 'react';
import Nalumnos from './nalumnos';
import {Link} from 'react-router-dom';
import './css/infoClase.css';

export default class InfoClase extends Component {

  state ={ data: "",
          alumnos: [],
          alumnos_clase: []
  }

  componentDidMount() {
    var url = "http://157.230.165.99:3001/clases/infoClase" + this.props.clase_id;
    fetch(url)
    .then(res => res.json())
    .then(data =>
      this.setState({ data })
      )

    var url2 = "http://157.230.165.99:3001/alumnos/AlumnosClase" + this.props.clase_id;
    fetch(url2)
    .then(res => res.json() )
    .then( alumnos_clase => this.setState({alumnos_clase}))
    
    fetch("http://157.230.165.99:3001/alumnos")
    .then(res => res.json() )
    .then(alumnos => this.setState({alumnos}))
  }



  render() {
    return (
    <div className="infoClase">

      <div className="HubDeClase">
        <h2>{this.state.data.hora_inicial}hrs - {this.state.data.hora_final}hrs Clase</h2>
        <Link to={"/editClase/"+this.state.data.clase_id}>
          <button type="submit" className="EditarClase" name="editar_id" value={this.state.data.clase_id}></button>
        </Link>
        <form method="post" action="/clases/eliminarClase" name="eliminarClase">
          <button type="submit" className="EliminarClase"onClick={() => {alert("Clase Eliminada")}} name="clase_id"  value={this.state.data.clase_id}> X </button>
        </form>
      </div>

      <p className="Subtitulo">Información</p>
      
      <div className="InformacionDeClase">
        <table>
          <tr>
            <th scope="col" className="Clave">Clave</th>
            <th scope="col" className="HoraInicio">Hora Inicio</th>
            <th scope="col" className="HoraFinal">Hora Final</th>
            <th scope="col" className="Instructor">Instructor</th>
          </tr>
          <tr>
            <td>{this.state.data.clase_id}</td>
            <td>{this.state.data.hora_inicial}</td>
            <td>{this.state.data.hora_final}</td>
            <td>{this.state.data.instructor}</td>
          </tr>
        </table>
      </div>

      <p className="Subtitulo">Núm. de alumnos: <Nalumnos clase_id={this.props.clase_id} /></p>
      
      <div className="AlumnosInscritos">
        <div className="AgregarAlumnos">
        <form action={"/alumnos/AddAlumno2Clase"+this.props.clase_id} method="post">
          <select name="params">
            {this.state.alumnos.map(alumno => (
              <option value={alumno.id}  >{alumno.nombre}</option>
            ))}
          </select>
          <input type="submit" className="AgregarAlumno"value=""/>
        </form>
        </div>

        <table>
          <tr>
            <th scope="col" className="Nombre">Nombre</th>
            <th scope="col" className="Correo">Correo</th>
            <th scope="col" className="Telefono">Teléfono</th>
            <th scope="col" className="Eliminar"></th>
          </tr>
          {this.state.alumnos_clase.map(alumno => (
            <tr key = {alumno.alumno_id}>
              <td>{alumno.nombre}</td>
              <td>{alumno.correo}</td>
              <td>{alumno.telefono}</td>
              <td>
                <form method="post" action={"/alumnos/eliminarAlumnoFromClase"+ this.props.clase_id} >
                  <button type="submit" className="EliminarAlumno" name="alumno_id" onClick={() => {alert("Alumno Eliminado de la Clase")}} value={alumno.alumno_id}> X </button>
                </form>
              </td>
            </tr>
        ))}
        </table>
      </div>

      
      </div>
    );
  }
}