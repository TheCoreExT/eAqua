import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './instructores.css'

export default class Instructores extends Component {

    state = {instructores: []}

    componentDidMount() {
        fetch('/instructores')
          .then(res => res.json())
          .then(instructores => this.setState({ instructores }));
    }

    render() {
        return (
          <div className="Instructores">
            <h2>Instructores</h2>

            <div class="BuscarInstructor">
                <input type="search" id="search" placeholder="Buscar" />
            </div>
            
            <div className="AddInstructor">
              <Link to="/addInstructor">Agregar Instructor</Link>
            </div>
            
            <table>
                <tr>
                  <th scope="col" className="Nombre" > Nombre </th>
                  {/*<th scope="col" class="Clase" > Clase </th>*/}
                  <th scope="col" className="Telefono" > Teléfono </th>
                  <th scope="col" className="Correo" > Correo </th>
                  <th scope="col" className="Detalles"> </th>
                  <th scope="col" className="Editar"> </th>
                  <th scope="col" className="Eliminar"> </th>
                </tr>

                {this.state.instructores.map(instructor => (
                    <tr>
                      <td>{instructor.nombre}</td>
                      <td>{instructor.telefono}</td>
                      <td>{instructor.correo}</td>
                      {/*<td>{instructor.clabe}</td>*/}

                      <td>
                          {/* <Link to={"/alumnos/" + alumno.id}> */}
                          <button>Detalles</button>
                          {/*</Link>*/}
                      </td>

                      <td>
                          <button type="submit" name="editar_id" value={instructor.id}> Editar </button>
                      </td>

                      <td>
                        <form method="post" action="/instructores/eliminarInstructor" name="eliminarInstructor">
                        <button type="submit" name="instructor_id" onClick={() => {alert("Instructor Eliminado")}} value={instructor.id}>Eliminar</button>
                        </form>
                      </td>

                    </tr>


              ))}

          </table>
          
          </div>
        );
    }
}