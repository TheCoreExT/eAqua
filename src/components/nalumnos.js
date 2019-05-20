import React,{Component} from 'react';

export default class Nalumnos extends Component {

    state = {p: ""}

    componentDidMount() {
        var url = "/alumnos/Nalumnos" + this.props.clase_id;

        fetch(url)
          .then(res => res.json())
          .then(p => this.setState({ p }));
    }

    render() {
        return (
            <p> {this.state.p}</p>
        );
    }
}