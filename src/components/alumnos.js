import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './alumno.css'

export default class Alumnos extends Component {

    state = {alumnos: []}

    componentDidMount() {
        fetch('/alumnos')
          .then(res => res.json())
          .then(alumnos => this.setState({ alumnos }));
    }
    alert() {
        alert("Alumno eliminado");
    }

    render() {
        return (
            <div className="Alumnos">
                <h2>Alumnos</h2>

          
            <div class="Buscar">
                <input type="search" id="search" placeholder="Buscar" />
            </div>
            

            <div className="AddAlumno">
                <Link to="/addAlumno">Agregar Alumno</Link>
            </div>

            <table>
                <tr>
                    <th scope="col" class="Nombre" > Nombre </th>
                    {/*<th scope="col" class="Clase" > Clase </th> */}
                    <th scope="col" class="Telefono"> Teléfono </th>
                    <th scope="col" class="Correo"> Correo </th>
                    {/*
                    <th scope="col" class="Estatura"> Estatura</th>
                    <th scope="col" class="Peso"> Peso</th>
                    <th scope="col" class="Seguro"> Seguro</th>
                    <th scope="col" class="Tipo_Sangre"> Tipo Sangre</th>
                    <th scope="col" class="Otros"> Otros</th>
                    */}   
                    <th scope="col" class="Detalles"> </th>
                    <th scope="col" class="Editar"> </th>
                    <th scope="col" class="Eliminar"> </th>
                </tr>
                {this.state.alumnos.map(alumno => (
                    <tr key={alumno.id}>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.telefono}</td>
                        <td>{alumno.correo}</td>
                        {/*
                        <td>{alumno.estatura}</td>
                        <td>{alumno.peso}</td>
                        <td>{alumno.seguro}</td>
                        <td>{alumno.tipo_sangre}</td>
                        <td>{alumno.otro_padecimiento}</td>
                        */}

                        <td>
                            <Link to={"/alumnos/" + alumno.id}>
                            <button>Detalles</button>
                            </Link>
                        </td>

                        <td>
                            <button type="submit" name="editar_id" value={alumno.id}> Editar </button>
                        </td>

                        <td>
                            <form method="post" action="/alumnos/eliminarAlumno" name="eliminarAlumno">
                            <button type="submit" name="alumno_id" onClick={() => {alert("Alumno Eliminado")}} value={alumno.id}> Eliminar </button>
                            </form>
                        </td>

                    </tr>
                ))}
                </table>
            </div>
        );
    }
}