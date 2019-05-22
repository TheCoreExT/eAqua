import React,{Component} from 'react';
import './css/menuPagos.css'
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
            <div className="TablaPagos">
                <table>
                    <tr>
                        <th className="PagoID">Pago ID</th>
                        <th className="Alumno">Alumno</th>
                        <th className="Fecha">Fecha</th>
                        <th className="Monto">Monto</th>
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
            </div>
        );
    }
}