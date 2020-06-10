import React, {Component} from 'react';
import "./App.css";
import AddTasks from "./AddTasks";
import NewTasks from "./NewTasks";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        }
        this.addTask = this.addTask.bind(this);
    }

    addTask(str) {
        this.setState({
            tasks: this.state.tasks.concat(str)
        })
    }

    render() {
        return (
            <div>
                <nav>
                    <h1 className="title">~Trellau~</h1>
                </nav>
                <AddTasks addTask={this.addTask}/>
                <NewTasks tasks={this.state.tasks}/>
            </div>
        );
    }
}

export default App;