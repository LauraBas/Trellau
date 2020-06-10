import React from 'react';
import TaskItem from "./TaskItem";
import "./NewTask.css";

// props.tasks = ["do work", "finish job"]

// [<TaskItem/>, <TaskItem/>]

const NewTasks = (props) => {
    return (
        <div>
            {props.tasks.map(str => <TaskItem toDo={str}/>)}
        </div>
    );
};

export default NewTasks;