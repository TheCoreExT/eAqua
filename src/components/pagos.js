import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './css/pagos.css'

export default class Pagos extends Component {
    state ={pagos: []}

    componentDidMount() {
        if(this.props.alumno_id){
            fetch('/alumnos/pagos' + this.props.alumno_id)
            .then(res => res.json())
            .then(pagos => this.setState({ pagos }));
        }
        else{
            fetch('/instructores/pagos' + this.props.instructor_id)
            .then(res => res.json())
            .then(pagos => this.setState({ pagos }));
        }
    }
    render() {
        let addPago;

        if(this.props.alumno_id){
            addPago = <Link to={"/addAlumnoPago/" + this.props.alumno_id}>
                            <img src =  "/img/Add.png " alt = "Clases" height="50px"></img>
                        </Link>;

        }else{

             addPago = <Link to={"/addInstructorPago/" + this.props.instructor_id}>
                            <img src =  "/img/Add.png " alt = "Clases" height="50px"></img>
                        </Link>;
        }

        console.log(this.state.pagos);
        return (
            <div className="pagos">
                
                <div className="HubPagos">
                    <div className="TituloPagos">
                        <h2> Pagos </h2>
                    </div>
                    <div className="BotonPagos">
                        {addPago}
                    </div>
                </div>
                <div className="TablaPagos">
                    <table>
                        <tr>
                            <th className="PagoID">Pago ID</th>
                            <th className="Fecha">Fecha</th>
                            <th className="Monto">Monto</th>
                        </tr>
                        {this.state.pagos.map(pago => (
                        <tr>
                            <td>{pago.pago_id}</td>
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