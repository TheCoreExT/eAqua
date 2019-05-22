import React,{Component} from 'react';

export default class AddPago extends Component {
    
    render() {
        let form;
        if(this.props.alumno_id){
            form = <form action={"/alumnos/addPago" + this.props.alumno_id} method="post">
                <input type="date" name="fecha" ></input>
                <input type="text" id="text" name="monto" placeholder="Monto"></input>
                <button type="submit" value="Submit">Aceptar</button>
            </form>
        }
        else{
            form = <form action={"/instructores/addPago" + this.props.instructor_id} method="post">
                <input type="date" name="fecha" ></input>
                <input type="text" id="text" name="monto" placeholder="Monto"></input>
                <button type="submit" value="Submit">Aceptar</button>
            </form>
        }
        return (
            <div className="addPago">
                {form}
            </div>
        );
    }
}