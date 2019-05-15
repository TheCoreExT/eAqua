import React,{Component} from 'react';
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