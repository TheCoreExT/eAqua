import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './css/instructores.css'

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
            
            <div class="HubInstructor">
                <h2>Instructores</h2>
                <input type="search" id="search" placeholder="Buscar" />
                <Link to="/addInstructor">
                  <img src =  "/img/Add.png " alt = "Clases" height="50px"></img>
                </Link>
            </div>
            
            <table>
                <tr>
                  <th scope="col" className="Nombre" > Nombre </th>
                  {/*<th scope="col" class="Clase" > Clase </th>*/}
                  <th scope="col" className="Telefono" > Teléfono </th>
                  <th scope="col" className="Correo" > Correo </th>
                  <th scope="col" className="Detalles"> </th>
                  <th scope="col" className="Detalles"> </th> {/*pagos*/}
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
                          <Link to={"/instructores/" + instructor.id}>
                          <button className="DetallesInstructor">Detalles</button>
                          </Link>
                      </td>

                      <td>
                            <Link to={"/pagosInstructor/" + instructor.id}>
                            <button className="DetallesInstructor"> Pagos </button>
                            </Link>
                      </td>

                      <td>
                          <button type="submit" className="EditarInstructor"name="editar_id" value={instructor.id}> </button>
                      </td>

                      <td>
                        <form method="post" action="/instructores/eliminarInstructor" name="eliminarInstructor">
                        <button type="submit" className="EliminarInstructor"name="instructor_id" onClick={() => {alert("Instructor Eliminado")}} value={instructor.id}> X </button>
                        </form>
                      </td>

                    </tr>


              ))}

          </table>
          
          </div>
        );
    }
}