import React from 'react';
import TaskItem from "./TaskItem";
import "./NewTask.css";

const NewTasks = (props) => {
    return (
        <div>
            {props.tasks.map(task => <TaskItem key={task.id} task={task}/>)}
        </div>
    );
};

export default NewTasks;