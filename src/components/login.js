import React,{Component} from 'react';
import './css/login.css'

export default class Login extends Component {

    

    render() {
        if(this.props.loggedin_succesfuly === false){

        }
        return (
            <div className="login">
                <div className="logo">
                    <img src="/img/logo.png" alt="logo"/>
                    <h1>eAqua</h1>
                </div>
                <div className="fields">
                    <h2>LOG IN</h2>

                    <form action="/login" method="POST" className="form">
                        <input className="text" type="text" name="username" placeholder="Username" required/>
                        <input className="text" type="password" name="password" placeholder="Password" required/>
                        <button type="submit">Ingresar</button>
                    </form>

                    <p>Jolans Inc. &copy;</p>
                </div>
                
            </div>
        );
    }
}