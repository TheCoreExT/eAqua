import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './instructores.css'

export default class Instructores extends Component {

    state = {instructores: []}

    componentDidMount() {
        fetch('/instructores')
          .then(res => res.json())
          .then(instructores => this.setState({ instructores }));
    }



    render() {
        return (
          <div className="Instructores">
            <h2>Instructores</h2>
            <Link to="/addInstructor">Agregar Instructor</Link>
            <div>
              {this.state.instructores.map(instructor => (
                <div key={instructor.id}>
                  {instructor.nombre} {instructor.id}
                </div>
              ))}
            </div>
          </div>
        );
    }
}