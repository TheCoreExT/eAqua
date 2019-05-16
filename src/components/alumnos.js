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
                <a href="./addAlumno"><h2>Alumnos</h2></a>
                <table>
                  {this.state.alumnos.map(alumno => (
                  <div key={alumno.id}>
                  <tr>
                    <td>{alumno.nombre}</td>
                    <td>{alumno.telefono}</td>
                    <td>{alumno.correo}</td>
                    <td>{alumno.estatura}</td>
                    <td>{alumno.peso}</td>
                    <td>{alumno.seguro}</td>
                    <td>{alumno.tipo_sangre}</td>
                    <td>{alumno.otro_padecimiento}</td>
                  </tr>
                  </div>
                
              ))}
                </table>
            </div>
        );
    }
}