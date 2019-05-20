import React,{Component} from 'react';
import ClasesInstructor from './clases_instructor';

export default class InfoInstructor extends Component {
    
    state = {data : ""}

    componentDidMount(){
        var url = "/instructores/infoInstructor" + this.props.instructor_id;
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div className="infoInstructor">
                <h2> {this.state.data.nombre} Instructor</h2>
                <p>Nombre: {this.state.data.nombre}</p>
                <p>E-mail: {this.state.data.correo}</p>
                <p>Teléfono: {this.state.data.telefono}</p>
                <p>Clabe bancaria: {this.state.data.clabe}</p>

                <h2>Clases</h2>
                <ClasesInstructor instructor_id = {this.props.instructor_id}/>

            </div>
        );
    }
}