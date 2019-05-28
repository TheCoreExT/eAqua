import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// Descomente esto para poder editar los css
import './css/menu.css'

export default class Menu extends Component {

    render() {
        return (
            <div className = "navigation col-lg-1">
                <nav id="navigation">

                    <Link to={'/clases'}>
                        <img src =  "/img/Clases2.png " alt = "Clases" height="50px"></img>
                        <p>Clases</p> 
                    </Link>  
                          
                   
                    <Link to={'/instructores'}>
                        <img src =  "/img/Instructores2.png " alt = "Instructores" height="50px"></img>
                        <p>Instructores</p>        
                    </Link>

                    <Link to={'/alumnos'}>
                        <img src =  "/img/Alumnos2.png " alt = "Alumnos" height="50px"></img> 
                        <p>Alumnos</p>         
                    </Link>

                    <Link to={'/pagos'}>
                        <img src =  "/img/pagos2.png " alt = "Pagos" height="50px"></img> 
                        <p>Pagos</p>         
                    </Link>

                    <form action="http://157.230.165.99:3001/login/logout" method="POST" >
                        <button type ="submit">
                            <img src =  "/img/Exit2.png " alt = "Exit" height="50px"></img>
                            <p>Salir</p>  
                        </button>
                    </form>

                </nav>
            </div>
        );
    }
}