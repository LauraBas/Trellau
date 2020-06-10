import React, { Component } from 'react';
import "./App.css";
import AddTasks from "./AddTasks";

class App extends Component {
  render() {
    return (
      <div>
          <nav>
              <h1 className="title">~Trellau~</h1>
          </nav>
        <AddTasks />
      </div>
    );
  }
}

export default App;