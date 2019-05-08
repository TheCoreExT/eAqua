import React,{Component} from 'react';
import { whileStatement } from '@babel/types';

export default class Header extends Component {

    render() {

        var div ={
            backgroundColor: '#45B8E2'
            
        }

        
        return (

            <div style={div} className="header">
                <img src="/img/logo.png" alt="logo" height="50px"/>
            </div>
        );
    }
}