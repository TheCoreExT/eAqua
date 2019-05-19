import React,{Component} from 'react';
// import './addClases.css'

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
              <input type="time" placeholder="Hora inicial" name="hora" />
              <input type="text" placeholder="Dia" name="dia"/>
              <select name="instructor_id">
                {this.state.instructores.map(instructor => (
                  <option value={instructor.id}  >{instructor.nombre}</option>
                ))}
              </select>

              <input type="submit" value="submit"/>
            </form>
          </div>
        );
    }
}