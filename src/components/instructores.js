import React,{Component} from 'react';
import './instructores.css'

export default class Instructores extends Component {
    state = {users: []}
    componentDidMount() {
        fetch('/users')
        //fetch('/index')
          .then(res => res.json())
          .then(users => this.setState({ users }));
    }
    render() {
        return (
            <div className="Instructores">
                <h2>Instructores</h2>
                <table>
                <th>Nombre</th><th>telefono</th><th>Correo</th><th>Clabe</th>
                { 
                    this.state.users.map(users => (
                    <tr>
                        <div key={users.instructor_id}>
                        <td>{users.nombre}</td>
                        <td>{users.telefono}</td>
                        <td>{users.correo}</td>
                        <td>{users.clabe}</td>
                        </div>
                    </tr>
                ))
                }
              </table>
            </div>
        );
    }
}