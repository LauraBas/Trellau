import React from 'react';
import "./NewTask.css";

// props = {
//      onRemove: function(id) {
//          ...
//      }
// }


class TaskItem extends React.Component {
    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.done =this.done.bind(this);
    }
    remove(event) {
        event.preventDefault()
        this.props.onRemove(this.props.task.id)
    }
    done(event){
        event.preventDefault()
        this.props.onDone(this.props.task.id)
    }

    render() {
        return (
            <div className="task">
                <p className="titleTask">{this.props.task.todo}</p>
                { !this.props.task.done &&
                    <button onClick={this.done} className="done">Done
                        <i className="fa fa-check"></i>
                    </button>
                }
                <button onClick={this.remove} className="delete">Delete
                    <i className="fa fa-trash"></i>
                </button>
                <p className="state"> {this.props.task.done ? "Done" : "To Do"}</p>
            </div>
        );
    }
}

export default TaskItem;