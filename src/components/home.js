import React,{Component} from 'react';
import './css/home.css'


export default class Home extends Component {

    render() {
        return (
            <div className="Home">
                    <div className="Titles">
                        <h1>Bienvenido</h1>
                        <h2> Con el software eAqua™ usted puede: </h2>
                    </div>

                    <div className="HubPrincipal">
                        
                        <div className="HubSecundario">
                            <img src="/img/alumno.png" alt="alumno" ></img>
                            <p> Administrar la información de los alumnos </p>

                        </div>

                        <div className="HubSecundario">
                            <img src="/img/instructor.png" alt="instructor" ></img>
                            <p> Administrar la información de los instructores</p>

                        </div>
                        
                        <div className="HubSecundario">
                            <img src="/img/clase.png" alt="clase" ></img>
                            <p> Organizar las clases del plantel </p>

                        </div>
                        
                        <div className="HubSecundario">
                            <img src="/img/pago.png" alt="pago" ></img>
                            <p> Gestionar los pagos del alumnado y la docencia</p>
                        </div>

                    </div>
            </div>
        );
    }
}