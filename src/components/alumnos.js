import React,{Component} from 'react';
import {Client}  from 'pg-native';

const connectionData={
    user: 'alan',
    host: '',
    database: 'eaqua',
    password: '',
    port: 5432
}

const client  = new Client(connectionData);

client.connect();

client.query('select * from alumno')
    .then(response => {
        console.log(response.rows)
        client.end()
    })
    .catch(err => {
        client.end()
    })

export default class Alumnos extends Component {

    render() {
        return (
            <div>
                <h2>Alumnos</h2>
            </div>
        );
    }
}