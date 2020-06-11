import React, {Component} from 'react';
import "./App.css";
import AddTasks from "./AddTasks";
import TaskList from "./TaskList";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            idCounter: 0
        }
        this.addTask = this.addTask.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onDone = this.onDone.bind(this);
    }

    generateId() {
        this.setState({
            idCounter: this.state.idCounter + 1
        })
        return this.state.idCounter
    }

    addTask = (str) => {
        let temp = [...this.state.tasks];
        const id = this.generateId();
        const obj = {todo: str, id: id, done: false}
        temp.push(obj)
        this.setState({tasks: [...temp]})
    }

    onRemove(id) {
        function filterTaskNotWithThisId(task) {
            return task.id !== id
        }

        this.setState({
            tasks: this.state.tasks.filter(filterTaskNotWithThisId)
        })
    }

    onDone(id) {
        let temp = [...this.state.tasks];
        let task = temp.find((t) => id === t.id);
        task.done = true;
        this.setState({tasks: temp})
    }

    render() {
        return (
            <div>
                <nav>
                    <h1 className="title">~Trellau~</h1>
                </nav>
                <AddTasks addTask={this.addTask}/>
                <div className="subcontainer">
                    <div className="hacer">
                        <TaskList tasks={this.state.tasks.filter((task) => !task.done)} onRemove={this.onRemove}
                                  onDone={this.onDone}/>
                    </div>

                    <div className= "hecho">
                        <TaskList tasks={this.state.tasks.filter((task) => task.done)} onRemove={this.onRemove}
                                  onDone={this.onDone}/>
                    </div>
                </div>
                <footer id="chau">Made with Love</footer>
            </div>
        );
    }
}

export default App;