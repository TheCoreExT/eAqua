import React,{Component} from 'react';

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
        <p>Nombre {this.state.data.nombre}</p>
        <p>NUA: {this.state.data.nua}</p>
        <p>Telefono: {this.state.data.telefono}</p>
        <p>Correo: {this.state.data.correo}</p>

        <h2>Clases</h2>
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
        <h2>Salud</h2>
        <p>Edad: {this.state.data.edad}</p>
        <p>Estatura: {this.state.data.estatura}</p>
        <p>Peso: {this.state.data.peso}</p>
        <p>Seguro médico: {this.state.data.seguro}</p>
        <p>Tipo sanguíneo: {this.state.data.tipo_sangre}</p>
        <p>Alergias: {this.state.data.alergias}</p>
        <p>Otros padecimientos: {this.state.data.otro_padecimiento}</p>
    </div>;
    }
}