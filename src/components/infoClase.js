import React,{Component} from 'react';

export default class InfoClase extends Component {

                state ={data : "" }

                 componentDidMount() {
                   var url =
                     "/clases/infoClase" + this.props.clase_id;
                   fetch(url)
                   .then(res => res.json())
                  .then(data =>
                      this.setState({ data })
                   );
                 }

                 render() {
                   return <div className="infoClase">

                       <h2>Clase de las {this.state.data.hora}hrs.</h2>

                   </div>;
                 }
               }