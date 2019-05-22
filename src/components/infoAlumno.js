import React,{Component} from 'react';
import './css/infoAlumno.css'

export default class InfoAlumno extends Component {

    state ={data : "",
            clases: []}

    componentDidMount() {
    var url =
        "/alumnos/infoAlumno" + this.props.alumno_id;
    fetch(url)
    .then(res => res.json())
    .then(data =>
        this.setState({ data })
    );

    var  url2 = "/clases/ClasesDeAlumno" + this.props.alumno_id;
    fetch(url2)
    .then(res => res.json())
    .then(clases =>
        this.setState({ clases })
    );
    }

    render() {
    return <div className="infoAlumno">

        <h2>{this.state.data.nombre}</h2>
        <p className="Subtitulo"> Datos Personales </p>
        
        <div className="PersonaAlumno">
            <div className="EtiquetasAlumno">
                <p>Nombre</p>
                <p>NUA: </p>
                <p>Telefono: </p>
                <p>Correo: </p>
                <p>Edad: </p>
                <p>Género: </p>
            </div>
            <div className="InformacionAlumno">
                <p>{this.state.data.nombre}</p>
                <p>{this.state.data.nua}</p>
                <p>{this.state.data.telefono}</p>
                <p>{this.state.data.correo}</p>
                <p>{this.state.data.edad}</p>
                <p>{this.state.data.genero}</p>
            </div>
        </div>

        <p className="Subtitulo">Clases</p>

        <div className="HorarioAlumno">
            <table>
                <tr>
                    <th>Hora Inicial</th>
                    <th>Hora Final</th>
                    <th>Día</th>
                    <th>Instructor</th>
                </tr>

                {this.state.clases.map(clase => (
                    <tr>
                        <td>{clase.hora_inicial}</td>
                        <td>{clase.hora_final}</td>
                        <td>{clase.dia}</td>
                        <td>{clase.instructor}</td>
                    </tr>
                ))}
            </table>
        </div>

        <p className="Subtitulo">Salud</p>
        
        <div className="SaludAlumno">

            <div className="EtiquetasAlumno"> 
                <p>Estatura: </p>
                <p>Peso: </p>
                <p>Seguro Médico: </p>
                <p>Tipo Sanguíneo </p>
                <p>Alergias: </p>
                <p>Otros Padecimientos: </p>
            </div>
            
            <div className="InformacionAlumno">
                <p>{this.state.data.estatura}</p>
                <p>{this.state.data.peso}</p>
                <p>{this.state.data.seguro}</p>
                <p>{this.state.data.tipo_sangre}</p>
                <p>{this.state.data.alergias}</p>
                <p>{this.state.data.otro_padecimiento}</p>
            </div>

        </div>

    </div>;
    }
}