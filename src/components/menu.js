import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './menu.css'

export default class Menu extends Component {

    render() {
        return (
            <div className="menu">
                <div className="icons">
                    <Link to={'/clases'}>
                        <div className="Images">
                            <img src =  "/img/Clases2.png " alt = "Clases" height="50px"></img> 
				        </div>
                        <p className="title-menu">Clases</p>                   
                    </Link>

                    <Link to={'/instructores'}>
                        <div className="Images">
                            <img src =  "/img/Instructores2.png " alt = "Instructores" height="50px"></img>
				        </div>
                        <p className="title-menu">Instructores</p>                   
                    </Link>

                    <Link to={'/alumnos'}>
                        <div className="Images">
                            <img src =  "/img/Alumnos2.png " alt = "Alumnos" height="50px"></img> 
				        </div>
                        <p className="title-menu">Alumnos</p>                   
                    </Link>

                    <Link to={'/alumnos'}>
                        <div className="Images">
                            <img src =  "/img/Exit2.png " alt = "Exit" height="50px"></img>
				        </div>
                        <p className="title-menu">Cerrar Sesión</p>                   
                    </Link>
                </div>
            </div>
        );
    }
}