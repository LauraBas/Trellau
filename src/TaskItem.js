import React from 'react';
import "./NewTask.css";

function TaskItem(props) {
    return (
        <div className="task">
            <p className="titleTask">{props.task.todo}</p>
            <button className="done">Done
                <i className="fa fa-check"></i>
            </button>
            <button className="delete">Delete
                <i className="fa fa-trash"></i>
            </button>

        </div>
    );
}

export default TaskItem;