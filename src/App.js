import React, {Component} from 'react';
import "./App.css";
import AddTasks from "./AddTasks";
import NewTasks from "./NewTasks";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            idCounter: 0
        }
        this.addTask = this.addTask.bind(this);
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
        const obj = {todo: str, id: id}
        temp.push(obj)
         this.setState({tasks: [...temp]})
    }

    render() {
        return (
            <div>
                <nav>
                    <h1 className="title">~Trellau~</h1>
                </nav>
                <AddTasks addTask={this.addTask}/>
                <NewTasks tasks={this.state.tasks} />
                <footer id="chau">Made with Love</footer>
            </div>
        );
    }
}

export default App;