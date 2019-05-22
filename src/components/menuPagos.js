import React,{Component} from 'react';

export default class MenuPagos extends Component {

    state = { 
        pagos: []
    }
    componentDidMount() {
        fetch('/pagos')
          .then(res => res.json())
          .then(pagos => this.setState({ pagos }));
    }

    render() {
        return (
            <div className="menuPagos">
                <h2>Pagos</h2>
                <table>
                    <tr>
                        <th>Pago ID</th>
                        <th>Alumno</th>
                        <th>Fecha</th>
                        <th>Monto</th>
                    </tr>
                    {this.state.pagos.map(pago => (
                        <tr>
                            <td>{pago.pago_id}</td>
                            <td>{pago.nombre}</td>
                            <td>{pago.fecha}</td>
                            <td>${pago.monto}</td>
                        </tr>
                    ))}
                </table>
            </div>
        );
    }
}