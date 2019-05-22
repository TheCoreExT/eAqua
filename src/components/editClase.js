import React,{Component} from 'react';

export default class EditClase extends Component {

    state = {instructores: [],
            data: {}}

    componentDidMount() {
      fetch("/instructores")
        .then(res => res.json())
        .then(instructores =>
          this.setState({ instructores })
        );

        var url = "/clases/infoClase" + this.props.clase_id;
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }));
    }

    render() {
        return (
          <div className="AddClases">
            <form action={"/clases/editClase"+this.props.clase_id} method="post">
            <h2> Editar clase </h2>
              <div className="Hub">
                <input type="time" className="inputclass" placeholder="Hora Inicial" defaultValue={this.state.data.hora_inicial} name="hora_inicial"/>
                <input type="time" className="inputclass"placeholder="Hora Final" name="hora_final" defaultValue={this.state.data.hora_final} />
                <input type="text" className="inputclass"placeholder="Dia" name="dia" defaultValue={this.state.data.dia}/>
                <br></br>
                <select name="instructor_id">
                  {this.state.instructores.map(instructor => (
                    <option value={instructor.id}  >{instructor.nombre}</option>
                  ))}
                </select>
              </div>
              
              <div className="SubmitClase">
                <input type="submit" value="Aceptar"/>
              </div>


            </form>
          </div>
        );
    }
}