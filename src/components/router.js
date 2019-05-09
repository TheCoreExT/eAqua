import React,{Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './header';
import Home from './home';
import Instructores from './instructores';
import Alumnos from './alumnos';
import Error from './error';
import Menu from './menu'
import Clases from './clases'


export default class Routes extends Component {
    state = {users: []}
    componentDidMount() {
        fetch('/users')
        //fetch('/index')
          .then(res => res.json())
          .then(users => this.setState({ users }));
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Menu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/instructores" component={Instructores} />
                    <Route exact path="/alumnos" component={Alumnos} />
                    <Route exact path="/clases" component={Clases} />
                    <Route component={Error}/>
                    
                </Switch>
                <div className="App">
                        <h1>aaaaaaaaaaaaaa</h1>
                        {this.state.users.map(user =>
                            <div key={user.id}>Hey {user.name}</div>
                        )}
                     </div>
            </BrowserRouter>
        );
    }
}