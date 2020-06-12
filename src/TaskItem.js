import React from 'react';
import "./NewTask.css";

class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.done = this.done.bind(this);
        this.state = {
            editMode: false,
            input: ""
        }
    }

    remove(event) {
        event.preventDefault()
        this.props.onRemove(this.props.task.id)
    }

    done(event) {
        event.preventDefault()
        this.props.onDone(this.props.task.id)
    }

    clickTitle = () => {
        this.setState({
            editMode: true,
        })
    }
    finishEditing = () => {
        this.props.changeName(this.props.task.id, this.state.input)
        this.setState({editMode: false})
    };

    keyPress = (e) => {
    }
    handleChange =(e) => {
        this.setState({input: e.target.value})
    }


    render() {
        const normalMode =
            <div className="task">
                <p onClick={this.clickTitle} className="titleTask">{this.props.task.todo}</p>
                {!this.props.task.done &&
                    <button onClick={this.done} className="done">Done
                        <i className="fa fa-check"></i>
                    </button>
                }
                <button onClick={this.remove} className="delete">Delete
                    <i className="fa fa-trash"></i>
                </button>
                <p className="state">{this.props.task.done ? "Done" : "To Do"}</p>
            </div>

        const editMode =
            <div className="task">
                <p className="editTitle">Edit your task</p>
                <input className="input" onKeyPress={this.keyPress} defaultValue={this.props.task.todo} onChange={this.handleChange}/>
                <button className="editButton" onClick={this.finishEditing}>
                    <i className="fa fa-pencil"></i>
                    Edit </button>
            </div>

        return this.state.editMode ? editMode : normalMode
    }
}

export default TaskItem;