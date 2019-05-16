import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './clases.css'

export default class Clases extends Component {

    state = {clases: []}

    componentDidMount() {
      fetch("/clases")
        .then(res => res.json())
        .then(clases =>
          this.setState({ clases })
        );
    }

    render() {
        
        return (
          // <div class="col-lg-11">
          //   <div class="col-lg-6">
              <div className="Clases">
                <a href="./addClases"><h2>Clases</h2></a>
                <table>
                  {this.state.clases.map(clase => (
                    <div key={clase.id}>
                      <tr>
                        <td>{clase.dia}</td>
                        <td>{clase.hora}</td>
                      </tr>
                    </div>
                  ))}
                </table>
                
              </div>
            
          
          //   </div>
          // </div>
        );
    }
}