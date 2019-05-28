import React,{Component} from 'react';
import './css/addAlumno.css'

export default class AddAlumno extends Component {

    render() {
        return (
          <div className="AddAlumno">
              
              <form action="/alumnos" method="post">
          
                <div className="DatosBasicos">
                  <h2> Nuevo Alumno </h2>
                  <input type="text" className="text" name="nombre" placeholder="Nombre"></input>
                  <input type="text" className="text" name="telefono" placeholder="Teléfono"></input>
                  <input type="text" className="text" name="correo" placeholder="Correo"></input>
                  <input type="text" className="text" name="edad" placeholder="Edad"></input>
                  <select name="genero">
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="DatosClinicos">
                  <h2> Datos Clínicos</h2>
                  <input type="text" className="text" name="estatura" placeholder="Estatura"></input>
                  <input type="text" className="text" name="peso" placeholder="Peso"></input>
                  <input type="text" className="text" name="tipo_sangre" placeholder="Tipo Sanguíneo"></input>
                  <input type="text" className="text" name="seguro" placeholder="Seguro Médico"></input>
                  <input type="text" className="text" name="alergias" placeholder="Alergias"></input>
                  <input type="text" className="text" name="otro_padecimiento" placeholder="Otro Padecimiento"></input>
                </div>
                <br></br>

                <div className="SeparadorAlumno"></div>

                <div className="AceptarAlumno">
                  <button type="submit" value="Submit" onClick={() => {alert("Alumno Creado")}}>Aceptar</button>
                </div>

              </form>

          </div>
        );
    }
}