import React,{Component} from 'react';

export default class AddInstructor extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            nombre: '',
            telefono: '',
            correo: '',
            clabe: ''
        }

    }

    onChange(e){
      
        this.setState({ [e.target.name]: e.target.value });
       
        console.log(this.state);
    }

    onSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }
    


    render() {
        return (
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              onChange={this.onChange}
              placeholder="Nombre"
              name="nombre"
            />
            <input
              type="text"
              onChange={this.onChange}
              placeholder="Telefono"
              name="telefono"
            />
            <input
              type="text"
              onChange={this.onChange}
              placeholder="Email"
              name="correo"
            />
            <input
              type="text"
              onChange={this.onChange}
              placeholder="Clabe"
              name="clabe"
            />

            <input type="submit" />
          </form>
        );
    }
}