import React,{Component} from 'react';
import ClasesInstructor from './clases_instructor';
import {Link} from 'react-router-dom';
import './css/infoInstructor.css';

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

                <div className="HubDeInstructor">
                    <h2> {this.state.data.nombre}</h2>
                    <p className="Cargo"> Instructor </p>
                    <Link to={"/editInstructor/"+this.props.instructor_id}>
                        <button type="submit" className="EditarInstructor" name="editar_id" value={this.props.instructor_id}></button>
                    </Link>
                </div>
                

                <p className="Subtitulo"> Datos Personales </p>
                
                <div className="PersonaInstructor">
                    <div className="EtiquetasInstructor">
                        <p>Nombre: </p>
                        <p>NUE: </p>
                        <p>Teléfono: </p>
                        <p>Correo: </p>
                        <p>Clabe: </p>
                    </div>
                    <div className="InformacionInstructor">
                        <p>{this.state.data.nombre}</p>
                        <p>{this.state.data.instructor_id} </p>
                        <p>{this.state.data.telefono}</p>
                        <p>{this.state.data.correo}</p>
                        <p>{this.state.data.clabe}</p>
                    </div>
                </div>
                
                <p className="Subtitulo"> Clases </p>

                <div className="HorarioInstructor">
                    <ClasesInstructor instructor_id = {this.props.instructor_id}/>
                </div>

            </div>
        );
    }
}