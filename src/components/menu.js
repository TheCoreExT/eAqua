import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './menu.css'

export default class Menu extends Component {

    render() {
        return (
            <div className="menu">
                <div class="icons">
                    <Link to={'/clases'}>
                        <div class="Images">
                            <img src =  "/img/Clases2.png " alt = "Clases" height="50px"></img> 
				        </div>
                        <p class="title-menu">Clases</p>                   
                    </Link>

                    <Link to={'/instructores'}>
                        <div class="Images">
                            <img src =  "/img/Instructores2.png " alt = "Instructores" height="50px"></img>
				        </div>
                        <p class="title-menu">Instructores</p>                   
                    </Link>

                    <Link to={'/alumnos'}>
                        <div class="Images">
                            <img src =  "/img/Alumnos2.png " alt = "Alumnos" height="50px"></img> 
				        </div>
                        <p class="title-menu">Alumnos</p>                   
                    </Link>

                    <Link to={'/alumnos'}>
                        <div class="Images">
                            <img src =  "/img/Exit2.png " alt = "Exit" height="50px"></img>
				        </div>
                        <p class="title-menu">Cerrar Sesión</p>                   
                    </Link>
                </div>
            </div>
        );
    }
}