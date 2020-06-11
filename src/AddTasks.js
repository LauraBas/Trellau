import React from 'react';
import "./AddTasks.css";


//props.addTask = function...

class AddTasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.add = this.add.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    add(event) {
        event.preventDefault();
        this.props.addTask(this.state.input)
        this.setState({input: ""})
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
                    <input value={this.state.input} onChange={this.handleChange} className="input"/>
                    <button onClick={this.add} id="go">Add <i className="fa fa-thumbs-up"></i></button>
                </div>
            </div>
        );
    }
}

export default AddTasks;