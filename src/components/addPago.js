import React,{Component} from 'react';
import './css/addPago.css'

export default class AddPago extends Component {
    
    render() {

        let form;
        if(this.props.alumno_id){
            form = <form action={"/alumnos/addPago" + this.props.alumno_id} method="post">
                <h2 className="NuevoPago">Nuevo Pago</h2>
                <input type="date" className="InputText" name="fecha" ></input>
                <br></br>
                <input type="text" className="InputText" id="text" name="monto" placeholder="Monto"></input>
                <br></br>
                <button type="submit" className="EnviarPago" value="Submit">Aceptar</button>
            </form>
        }
        else{
            form = <form action={"/instructores/addPago" + this.props.instructor_id} method="post">
                <h2 className="NuevoPago">Nuevo Pago</h2>
                <br></br>
                <input type="date" className="InputText" name="fecha" ></input>
                <br></br>
                <input type="text" className="InputText" id="text" name="monto" placeholder="Monto"></input>
                <br></br>
                <button type="submit" className="EnviarPago" value="Submit">Aceptar</button>
            </form>
        }
        return (
            <div className="addPago">
                {form}
            </div>
        );
        

    }
}