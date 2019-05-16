import React,{Component} from 'react';
// import './addAlumno.css'

export default class AddAlumno extends Component {

    render() {
        return (
          <div className="AddAlumno">
            <form>
                <input type="text" placeholder="Nombre"></input>
                <input type="text" placeholder="Apellido"></input>
                <input type="text" placeholder="Correo"></input>

                <input type="text" placeholder="Edad"></input>
                <input type="text" placeholder="Estatura"></input>
                <input type="text" placeholder="Peso"></input>
                <input type="text" placeholder="Tipo de Sangre"></input>
                <input type="text" placeholder="Seguro Médico"></input>
                <input type="text" placeholder="Alergias"></input>
                <input type="text" placeholder="Otros"></input>
            </form>
          </div>
        );
    }
}