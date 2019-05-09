import React,{Component} from 'react';
<<<<<<< HEAD
=======
const { Client } = require('pg')

const connectionData={

    user: 'alan',
    host: 'localhost:3000',
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
>>>>>>> d9892cc3375e44898411a25d25a482c1ab68644d

export default class Alumnos extends Component {

    render() {
        return (
            <div>
                <h2>Alumnos</h2>
            </div>
        );
    }
}