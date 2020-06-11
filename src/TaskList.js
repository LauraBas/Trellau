import React from 'react';
import TaskItem from "./TaskItem";
import "./NewTask.css";

const TaskList = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.tasks.map(task => <TaskItem onDone={props.onDone} onRemove={props.onRemove} key={task.id} task={task}/>)}
        </div>
    );
};

export default TaskList;