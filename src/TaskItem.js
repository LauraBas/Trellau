import React from 'react';
import "./NewTask.css";

const TaskItem = (props) => {
    return (
        <div>
            <div className="task">
                <p className="titleTask">{props.toDo}</p>
                <button className="done">Done
                <i className="fa fa-check"></i></button>
                <button className="delete">Delete
                <i className="fa fa-trash"></i>
                </button>

            </div>
        </div>
    );
};

export default TaskItem;