import React,{Component} from 'react';
import  './css/addInstructor.css';

export default class AddInstructor extends Component {
    
    render() {
        return (
            <div className="AddInstructores">
                <form action="/login/instructores" method="post">    
                <h2>Nuevo Instructor </h2>
                    <div className="HubIn">
                        <input type="text" className="text" name="nombre" placeholder="Nombre"/>
                        <input type="text" className="text" name="telefono" placeholder="Telefono"/>
                        <input type="text" className="text" name="correo" placeholder="Email"></input>
                        <input type="text" className="text" name="clabe" placeholder="Clabe"/>
                    </div>

                    <div className="AceptarInstructor">
                        <input type="submit" value="Aceptar" onClick={() => {alert("Instructor Creado")}}/>
                    </div>

                </form>
            </div>

        );
    }
}