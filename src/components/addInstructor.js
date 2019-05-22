import React,{Component} from 'react';
import  './css/addInstructor.css'

export default class AddInstructor extends Component {
    
    render() {
        return (
            
            <div className="AddInstructor">
                <form action="/instructores" method="post">
                    
                    <div className="DatosPersona">
                        <h2>Nuevo Instructor</h2>
                        <input type="text" className="text" name="nombre" placeholder="Nombre"/>
                        <input type="text" className="text" name="telefono" placeholder="Telefono"/>
                        <input type="text" className="text" name="correo" placeholder="Email"></input>
                        <h2>Datos Bancarios</h2>
                        <input type="text" className="text" name="clabe" placeholder="Clabe"/>
                        <input type="text" className="text" name="num_cuenta"placeholder="Número De Cuenta"/>
                    </div>

                    <div className="FichaMedica">
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
                    </div>

                    <div className="SeparadorInstructor"></div>
                    
                    <div className="AceptarInstructor">
                        <input type="submit" value="Aceptar"/>
                    </div>

                </form>
            </div>

        );
    }
}