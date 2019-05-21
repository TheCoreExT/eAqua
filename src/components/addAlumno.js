import React,{Component} from 'react';
import './addAlumno.css'

export default class AddAlumno extends Component {

    render() {
        return (
          <div className="AddAlumno">
              
              <form action="/alumnos" method="post">
              
              <div className="DatosBasicos">
                <h2> Nuevo Alumno </h2>
                <input type="text" name="nombre" placeholder="Nombre"></input>
                <input type="text" name="telefono" placeholder="Teléfono"></input>
                <input type="text" name="correo" placeholder="Correo"></input>
              </div>

              <div className="DatosClinicos">
                <h2> Datos Clínicos</h2>
                <input type="text" name="edad" placeholder="Edad"></input>
                
                <input type="text" name="estatura" placeholder="Estatura"></input>
                
                <input type="text" name="peso" placeholder="Peso"></input>
                
                <input type="text" name="tipo_sangre" placeholder="Tipo de Sangre"></input>
                
                <input type="text" name="seguro" placeholder="Seguro Médico"></input>
                
                <input type="text" name="alergias" placeholder="Alergias"></input>
                
                <input type="text" name="otro_padecimiento" placeholder="Otros"></input>
              </div>

              <button type="submit" value="Submit">Enviar</button>
              
              </form>

          </div>
        );
    }
}