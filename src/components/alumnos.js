import React,{Component} from 'react';
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
                {this.state.alumnos.map(alumno => (
                <div key={alumno.id}>
                  {alumno.nombre} {alumno.id}
                </div>
              ))}
            </div>
        );
    }
}