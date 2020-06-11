import React from 'react';
import TaskItem from "./TaskItem";
import "./NewTask.css";

const TaskList = (props) => {
    return (
        <React.Fragment>
            {props.tasks.map(task => <TaskItem onDone={props.onDone} onRemove={props.onRemove} key={task.id} task={task}/>)}
        </React.Fragment>
    );
};

export default TaskList;