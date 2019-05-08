import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './menu.css'

export default class Menu extends Component {

    render() {
        return (
            <div className="menu">
                <Link to={'/'}>
                    <p>Home</p>
                </Link>
                <Link to={'/instructores'}>
                    <p>Instructores</p>
                </Link>
                <Link to={'/alumnos'}>
                    <p>Alumnos</p>
                </Link>
                <Link to={'/clases'}>
                    <p>Clases</p>
                </Link>
            </div>
        );
    }
}