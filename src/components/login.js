import React,{Component} from 'react';
import './css/login.css'

export default class Login extends Component {

    state =  {loggedin: false}
  
    componentDidMount() {
        fetch('https://157.230.165.99:3001/login')
        .then(res => res.json())
        .then(loggedin => this.setState({ loggedin }))
    }

    render() {
        
        return (
            <div className="login">
                <div className="logo">
                    <img src="/img/logo.png" alt="logo"/>
                    <h1>eAqua</h1>
                </div>
                <div className="fields">
                    <h2>LOG IN</h2>

                    <form action="http://157.230.165.99:3001/login" method="POST" className="form">
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