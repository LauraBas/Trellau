import React from 'react';
import "./AddTasks.css";


//props.addTask = function...

class AddTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input:''
        }
        this.add = this.add.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    add(event) {
        event.preventDefault();
        const str = event.target.value;
        this.props.addTask(str)
    }

    handleChange(event) {
    this.setState({
      input: event.target.value
    });
}

    render() {
        return (
            <div>
                <div className="container">
                    <p className="add">Add your task here</p>
                    <input onChange={this.handleChange} className="input"/>
                    <p className="importance">Level of importance</p>
                    <button className="btn" id="red">High</button>
                    <button className="btn" id="yellow">Middle</button>
                    <button className="btn" id="green">Low</button>
                    <button onClick={this.add} id="go">Add <i className="fa fa-thumbs-up"></i></button>
                </div>

            </div>
        );
    }
}

export default AddTasks;