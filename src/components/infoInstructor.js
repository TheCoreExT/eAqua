import React,{Component} from 'react';
import ClasesInstructor from './clases_instructor';
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

                <h2> {this.state.data.nombre}</h2>
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

                <p className= "Subtitulo"> Salud </p>

                <div className="SaludInstructor">
                    <div className="EtiquetasInstructor">
                        <p>Edad: </p>
                        <p>Género: </p>
                        <p>Estatura: </p>
                        <p>Peso: </p>
                        <p>Seguro Médico: </p>
                        <p>Tipo Sanguíneo: </p>
                        <p>Alergias: </p>
                        <p>Otros Padecimientos: </p>
                    </div>
                    {/*
                    <div className="InformacionInstructor">
                        <p>{this.state.data.edad}</p>
                        <p>{this.state.data.genero}</p>
                        <p>{this.state.data.estatura}</p>
                        <p>{this.state.data.peso}</p>
                        <p>{this.state.data.seguro}</p>
                        <p>{this.state.data.tipo_sangre}</p>
                        <p>{this.state.data.alergias}</p>
                        <p>{this.state.data.alergias}</p>
                    </div>
                    */}
                </div>

            </div>
        );
    }
}