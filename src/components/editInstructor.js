import React,{Component} from 'react';

export default class EditInstructor extends Component {

    state = {data: ""}

    componentDidMount(){
        var url = "/instructores/infoInstructor" + this.props.instructor_id;
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }));
    }
    render() {
        return (
            
            <div className="AddInstructor">
                <form action={"/instructores/editInstructor"+this.props.instructor_id} method="post">
                    
                    <div className="DatosPersona">
                        <h2>Nuevo Instructor</h2>
                        <input type="text" className="text" name="nombre" placeholder="Nombre" defaultValue={this.state.data.nombre}/>
                        <input type="text" className="text" name="telefono" placeholder="Telefono"defaultValue={this.state.data.telefono}/>
                        <input type="text" className="text" name="correo" placeholder="Email" defaultValue={this.state.data.correo}></input>
                        <h2>Datos Bancarios</h2>
                        <input type="text" className="text" name="clabe" placeholder="Clabe" defaultValue={this.state.data.clabe}/>
                        <input type="text" className="text" name="num_cuenta"placeholder="Número De Cuenta"/>
                    </div>

                    {/* <div className="FichaMedica">
                        <h2>Datos Clínicos</h2>
                        <select name="genero">
                            <option value="Masculino"> Masculino </option>
                            <option value="Femenino"> Femenino </option>
                            <option value="Otro"> Otro </option>
                        </select>
                        <input type="text" className="text" name="edad" placeholder="Edad"/>
                        <input type="text" className="text" name="estatura" placeholder="Estatura"/>
                        <input type="text" className="text" name="peso" placeholder="Peso"/>
                        <input type="text" className="text" name="tipo_sangre" placeholder="Tipo Sanguíneo"/>
                        <input type="text" className="text" name="seguro" placeholder="Seguro Médico" />
                        <input type="text" className="text" name="alergias" placeholder="Alergias"/>
                        <input type="text" className="text" name="otro_padecimiento" placeholder="Otro Padecimiento"/>
                    </div> */}

                    {/* <div className="SeparadorInstructor"></div> */}
                    
                    <div className="AceptarInstructor">
                        <input type="submit" value="Aceptar"/>
                    </div>

                </form>
            </div>

        );
    }
}