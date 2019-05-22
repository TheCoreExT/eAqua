import React,{Component} from 'react';
import './css/addClases.css';

export default class AddClases extends Component {

  state = {instructores: []}

    componentDidMount() {
      fetch("/instructores")
        .then(res => res.json())
        .then(instructores =>
          this.setState({ instructores })
        );
    }

    render() {
        return (
          <div className="AddClases">
            <form action="/clases" method="post">
            <h2> Nueva clase </h2>
              <div className="Hub">
                <input type="time" placeholder="Hora Inicial" name="hora_inicial" />
                <input type="time" placeholder="Hora Final" name="hora_final" />
                <input type="text" placeholder="Dia" name="dia"/>
                <br></br>
                <select name="instructor_id">
                  {this.state.instructores.map(instructor => (
                    <option value={instructor.id}  >{instructor.nombre}</option>
                  ))}
                </select>
              </div>
              
              <div className="SubmitClase">
                <input type="submit" value="submit"/>
              </div>


            </form>
          </div>
        );
    }
}