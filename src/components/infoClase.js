import React,{Component} from 'react';

export default class InfoClase extends Component {

  state ={data : "" }

  componentDidMount() {
    var url = "/clases/infoClase" + this.props.clase_id;
    fetch(url)
    .then(res => res.json())
    .then(data =>
      this.setState({ data })
      );
  }

  render() {
    return <div className="infoClase">

      <h2>Clase de las {this.state.data.hora}hrs.</h2>
      <table>
        <tr>
          <th>Clave inicio</th>
          <th>Hora inicio</th>
          <th>Hora fin</th>
          <th>Alumnos</th>
          <th>Instructor</th>
        </tr>
        <tr>
          <td>{this.state.data.clase_id}</td>
          
        </tr>
      </table>
      <h2>Alumnos</h2>
      <table>
        <tr>
          <th>Nombre</th>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
      </div>;
  }
}