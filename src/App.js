import React,{Component} from 'react';
import Router from './components/router';


export default class App extends Component {
    state = {users: []}
    componentDidMount() {
        fetch('/users')
        //fetch('/index')
          .then(res => res.json())
          .then(users => this.setState({ users }));
    }

    render() {
        return (
            <Router />
            
        );
    }
}
