import React,{Component} from 'react';
import Nalumnos from './nalumnos';


export default class InfoClase extends Component {

  state ={ data: "",
          alumnos: [],
          alumnos_clase: []
  }

  componentDidMount() {
    var url = "/clases/infoClase" + this.props.clase_id;
    fetch(url)
    .then(res => res.json())
    .then(data =>
      this.setState({ data })
      )

    var url2 = "/alumnos/AlumnosClase" + this.props.clase_id;
    fetch(url2)
    .then(res => res.json() )
    .then( alumnos_clase => this.setState({alumnos_clase}))
    
    fetch("/alumnos")
    .then(res => res.json() )
    .then(alumnos => this.setState({alumnos}))
  }



  render() {
    return (
    <div className="infoClase">

      <h2>{this.state.data.hora_inicial}hrs - {this.state.data.hora_final}hrs Clase</h2>
      <form method="post" action="/clases/eliminarClase" name="eliminarClase">
        <button type="submit" className="EliminarClase"onClick={() => {alert("Clase Eliminada")}} name="clase_id"  value={this.state.data.clase_id}> X </button>
      </form>
      <h3>Información</h3>
      <table>
        <tr>
          <th>Clave</th>
          <th>Hora Inicial</th>
          <th>Hora Final</th>
          <th>Instructor</th>
        </tr>
        <tr>
          <td>{this.state.data.clase_id}</td>
          <td>{this.state.data.hora_inicial}</td>
          <td>{this.state.data.hora_final}</td>
          <td>{this.state.data.instructor}</td>
        </tr>
      </table>

      <h3>Alumnos: <Nalumnos clase_id={this.props.clase_id} /></h3>
      <form action={"/alumnos/AddAlumno2Clase"+this.props.clase_id} method="post">
              <select name="params">
                {this.state.alumnos.map(alumno => (
                  <option value={alumno.id}  >{alumno.nombre}</option>
                ))}
              </select>

<<<<<<< HEAD
      <h2>Clase de las {this.state.data.hora}hrs.</h2>
      <table>
        <tr>
          <th>Clave inicio</th>
          <th>Hora inicio</th>
          <th>Hora fin</th>
          <th>Alumnos</th>
          <th>Instructor</th>
        </tr>
        <tr>
          <td>{this.state.data.clase_id}</td>
          
        </tr>
      </table>
      <h2>Alumnos</h2>
      <table>
        <tr>
          <th>Nombre</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
      </div>;
=======
              <input type="submit" value="submit"/>
      </form>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th></th>
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
    );
>>>>>>> ca8a45a10f9baba02cb5593ffc053b1b356eb8f2
  }
}