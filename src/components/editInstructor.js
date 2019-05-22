import React,{Component} from 'react';

export default class EditInstructor extends Component {

    state = {data: ""}

    componentDidMount(){
        var url = "/instructores/infoInstructor" + this.props.instructor_id;
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }));
    }
    render() {
        return (
            
            <div className="AddInstructores">
                <form action={"/instructores/editInstructor"+this.props.instructor_id} method="post">
                <h2>Nuevo Instructor</h2>
                    <div className="HubIn">
                        <input type="text" className="text" name="nombre" placeholder="Nombre" defaultValue={this.state.data.nombre}/>
                        <input type="text" className="text" name="telefono" placeholder="Telefono"defaultValue={this.state.data.telefono}/>
                        <input type="text" className="text" name="correo" placeholder="Email" defaultValue={this.state.data.correo}></input>
                        <input type="text" className="text" name="clabe" placeholder="Clabe" defaultValue={this.state.data.clabe}/>
                    </div>
                    <div className="AceptarInstructor">
                        <input type="submit" value="Aceptar"/>
                    </div>

                </form>
            </div>

        );
    }
}