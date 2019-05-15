import React,{Component} from 'react';
import './clases.css'

export default class Clases extends Component {

    state = {clases: []}

    componentDidMount() {
                          fetch("/clases")
                            .then(res => res.json())
                            .then(clases =>
                              this.setState({ clases })
                            );
                        }

    render() {
        
        return (
          // <div class="col-lg-11">
          //   <div class="col-lg-6">
              <div className="Clases">
                <h2>_____________Clases</h2>
                {this.state.clases.map(clase => (
                  <div >
                    <p>________________Día: {clase.dia} a las {clase.hora} hrs. Impartida por: {clase.instructor_nombre}. Alumnos: {clase.alumno_nombre}</p>
                  </div>
                ))}
              </div>
          //   </div>
          // </div>
        );
    }
}