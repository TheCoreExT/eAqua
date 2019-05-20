import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './clases.css'

export default class Clases extends Component {

    state = {clases: []}

    componentDidMount() {
      fetch("/clases")
        .then(res => res.json())
        .then(clases =>
          this.setState({ clases })
        );
    }
    alert() {
      alert("Clase eliminado");
    }

    render() {
        return (
          <div className="Clases">
            <h2>Clases</h2>

            <div className="Buscar_clases">
              <input type="search" id="search" placeholder="Buscar" />
            </div>

            <div className="AddClase">
                <Link to="/AddClase">Agregar clase</Link>
            </div>

            <table>
              <tr>
                <th scope="col" className="Instructor" > Instructor </th>
                <th scope="col" className="Día"> Día </th>
                <th scope="col" className="Hora"> Hora </th>
                <th scope="col" className="DetallesClases"> </th>
                <th scope="col" className="EditarClases"> </th>
                <th scope="col" className="EliminarClases"> </th>
              </tr>
              {this.state.clases.map(clase => (
                <tr key={clase.id}>
                  <td>{clase.instructor_nombre}</td>
                  <td>{clase.dia}</td>
                  <td>{clase.hora}</td>

                  <td>
                    <Link to={"/clases/" + clase.id}>
                      <button>Detalles</button>
                    </Link>
                  </td>
                  
                  <td>
                    <button type="submit" name="editar_id" value={clase.id}> Editar </button>
                  </td>

                  <td>
                    <form method="post" action="/clases/eliminarClase" name="eliminarClase">
                    <button type="submit" onClick={() => {alert("Clase Eliminada")}} name="clase_id"  value={clase.id}>Eliminar</button>
                    </form>
                  </td>

                        
                </tr>
            ))}
            </table>
          </div>

        );
    }
}

