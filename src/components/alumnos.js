import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './alumno.css'

export default class Alumnos extends Component {

    state = {alumnos: []}

    componentDidMount() {
        fetch('/alumnos')
          .then(res => res.json())
          .then(alumnos => this.setState({ alumnos }));
    }

    render() {
        return (
            <div className="Alumnos">
                <h2>Alumnos</h2>
                <Link to="/addAlumno">Agregar Alumno</Link>
                <table>
                  {this.state.alumnos.map(alumno => (

                  <tr key={alumno.id}>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.telefono}</td>
                    <td>{alumno.correo}</td>
                    <td>{alumno.estatura}</td>
                    <td>{alumno.peso}</td>
                    <td>{alumno.seguro}</td>
                    <td>{alumno.tipo_sangre}</td>
                    <td>{alumno.otro_padecimiento}</td>

                    <td>

                      <form method="post" action="/alumnos/eliminarAlumno" name="eliminarAlumno">
                      <button type="submit" onClick= {console.log("hola")} name="alumno_id"  value={alumno.id}>Eliminar</button>
                      </form>

                      </td>
                  </tr>

                
              ))}
                </table>
            </div>
        );
    }
}