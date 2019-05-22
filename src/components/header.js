import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './css/header.css';

export default class Header extends Component {

    render() {

                
        return (

            <div className="header">
                <Link to={'/'}>
                    <img src =  "/img/logo.png " alt = "Home" height="50px"></img>
                </Link>
                
            </div>
        );
    }
}