import React from 'react';
import "./AddTasks.css";
import "./NewTasks"

const AddTasks = () => {
    return (
        <div>
            <div className="container">
                <p className="add">Add your task here</p>
                <input className="input"/>
                <p className="importance">Level of importance</p>
                <button className="btn" id="red">High</button>
                <button className="btn" id="yellow">Middle</button>
                <button className="btn" id="green">Low</button>
            </div>
            <NewTask />
        </div>
    );
};

export default AddTasks;