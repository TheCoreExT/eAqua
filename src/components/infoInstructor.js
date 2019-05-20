import React,{Component} from 'react';

export default class InfoInstructor extends Component {
    
    state = {data : ""}

    componentDidMount(){
        var url = "/instructores/infoInstructor" + this.props.instructor_id;
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({ data }));
    }

    render() {
        return (
            <div className="class-name">
                content
            </div>
        );
    }
}