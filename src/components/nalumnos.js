import React,{Component} from 'react';

export default class Nalumnos extends Component {

    state = {p: ""}

    componentDidMount() {
        var url = "http://157.230.165.99:3001/alumnos/Nalumnos" + this.props.clase_id;

        fetch(url)
          .then(res => res.json())
          .then(p => this.setState({ p }));
    }

    render() {
        return (
            <span> {this.state.p}</span>
        );
    }
}