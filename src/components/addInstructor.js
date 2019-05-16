import React,{Component} from 'react';

export default class AddInstructor extends Component {
    
    render() {
        return (
            <form action="/instructores" method="post">
            <input type="text" placeholder="Nombre" name="nombre"/>
            <input type="text" placeholder="Telefono" name="telefono"/>
            <input type="text" placeholder="Email" name="correo"/>
            <input type="text" placeholder="Clabe" name="clabe"/>

            <input type="submit" value="submit"/>

            </form>
        );
    }
}