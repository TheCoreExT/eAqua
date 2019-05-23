import React,{Component} from 'react';

export default class EditAlumno extends Component {
    state = {data: ""}

    componentDidMount() {
        fetch('/alumnos/infoAlumno'+this.props.alumno_id)
          .then(res => res.json())
          .then(data => this.setState({ data }));
    }
    render() {
        return (
          <div className="AddAlumno">
              
              <form action={"/alumnos/editAlumno"+this.props.alumno_id} method="post">
          
                <div className="DatosBasicos">
                  <h2> Datos del Alumno </h2>
                  <input type="text" className="text" name="nombre" placeholder="Nombre" defaultValue={this.state.data.nombre}></input>
                  <input type="text" className="text" name="telefono" placeholder="Teléfono" defaultValue={this.state.data.telefono}></input>
                  <input type="text" className="text" name="correo" placeholder="Correo" defaultValue={this.state.data.correo}></input>
                  <input type="text" className="text" name="edad" placeholder="Edad" defaultValue={this.state.data.edad}></input>
                  <select name="genero" defaultValue={this.state.data.genero}>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div className="DatosClinicos">
                  <h2> Datos Clínicos</h2>
                  <input type="text" className="text" name="estatura" placeholder="Estatura" defaultValue={this.state.data.estatura}></input>
                  <input type="text" className="text" name="peso" placeholder="Peso" defaultValue={this.state.data.peso}></input>
                  <input type="text" className="text" name="tipo_sangre" placeholder="Tipo Sanguíneo" defaultValue={this.state.data.tipo_sangre}></input>
                  <input type="text" className="text" name="seguro" placeholder="Seguro Médico" defaultValue={this.state.data.seguro}></input>
                  <input type="text" className="text" name="alergias" placeholder="Alergias" defaultValue={this.state.data.alergias}></input>
                  <input type="text" className="text" name="otro_padecimiento" placeholder="Otro Padecimiento" defaultValue={this.state.data.otro_padecimiento}></input>
                </div>
                <br></br>

                <div className="SeparadorAlumno"></div>

                <div className="AceptarAlumno">
                  <button type="submit" value="Submit" onClick={() => {alert("Cambios Realizados")}}>Aceptar</button>
                </div>

              </form>

          </div>
        );
    }
}