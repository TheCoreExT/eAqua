import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './css/alumno.css'

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
                
            <div class="HubAlumno">
                <h2> Alumnos </h2>
                <input type="search" id="search" placeholder="Buscar" />
                <Link to="/addAlumno">
                    <img src =  "/img/Add.png " alt = "Clases" height="50px"></img>
                </Link>
            </div>
            
            {/*
            <div className="AddAlumno">
                <Link to="/addAlumno">
                    <img src =  "/img/Add.png " alt = "Clases" height="50px"></img>
                </Link>
            </div>
            */}
            <table>
                <tr>
                    <th scope="col" className="Nombre" > Nombre </th>
                    {/*<th scope="col" class="Clase" > Clase </th> */}
                    <th scope="col" className="Telefono"> Teléfono </th>
                    <th scope="col" className="Correo"> Correo </th>
                    {/*
                    <th scope="col" class="Estatura"> Estatura</th>
                    <th scope="col" class="Peso"> Peso</th>
                    <th scope="col" class="Seguro"> Seguro</th>
                    <th scope="col" class="Tipo_Sangre"> Tipo Sangre</th>
                    <th scope="col" class="Otros"> Otros</th>
                    */}   
                    <th scope="col" className="Detalles"> </th>
                    <th scope="col" className="Pagos"> </th> {/*Pagos*/ } 
                    <th scope="col" className="Editar"> </th>
                    <th scope="col" className="Eliminar"> </th>
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
                            <button className="DetallesAlumno"> Detalles </button>
                            </Link>
                        </td>

                        <td>
                            <Link to={"/pagosAlumno/" + alumno.id}>
                            <button className="DetallesAlumno"> Pagos </button>
                            </Link>
                        </td>

                        <td>
                            <Link to={"/editAlumno/" + alumno.id}>
                            <button type="submit" className="EditarAlumno" name="editar_id" value={alumno.id}> </button>
                            </Link>
                        </td>

                        <td>
                            <form method="post" action="/alumnos/eliminarAlumno" name="eliminarAlumno">
                            <button type="submit" className="EliminarAlumno" name="alumno_id" onClick={() => {alert("Alumno Eliminado")}} value={alumno.id}> X </button>
                            </form>
                        </td>

                        
                    </tr>
                ))}
                </table>

        </div>
        );
    }
}