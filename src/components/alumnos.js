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
                <h2>Alumnos</h2>
                {this.state.alumnos.map(alumno => (
                <div key={alumno.id}>
                  {alumno.nombre} {alumno.id}
                </div>
              ))}
            </div>
        );
    }
}