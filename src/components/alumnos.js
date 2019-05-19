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
    alert() {
        alert("Alumno eliminado");
    }

    render() {
        return (
            <div className="Alumnos">
                <h2>Alumnos</h2>
                <Link to="/addAlumno">Agregar Alumno</Link>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Estatura</th>
                        <th>Peso</th>
                        <th>Seguro</th>
                        <th>tipo_sangre</th>
                        <th>Otro</th>                        
                    </tr>
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
                      <button type="submit" name="alumno_id" onClick={() => {alert("Alumno Eliminado")}} value={alumno.id}>Eliminar</button>
                      </form>

                      </td>
                      <td>
                        <Link to={"/alumnos/" + alumno.id}>

                         <button>Más Información</button>
                        </Link>
                      </td>
                    
                     </tr>
                    ))}
                </table>
            </div>
        );
    }
}