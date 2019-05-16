import React,{Component} from 'react';
// import './addClases.css'

export default class AddClases extends Component {

    render() {
        return (
          <div className="AddClases">
            <form>
                <input type="text" placeholder="Hora inicial"></input>
                <input type="text" placeholder="Hora final"></input>
            
            </form>
          </div>
        );
    }
}