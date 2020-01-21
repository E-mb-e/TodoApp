import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 6;
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w wiedźmina",
        date: "2020-02-02",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "pójść do sklepu",
        date: "2019-11-02",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "napisać aplikację w react",
        date: "2020-02-13",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "znaleźć wodę na marsie",
        date: "2020-05-02",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "wstać rano z łóżka",
        date: "2020-02-02",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "zwiedzać świat",
        date: "2020-02-02",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };
  deleteTask = id => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({ tasks });

    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  };
  changeTaskStatus = id => {
    let tasks = [...this.state.tasks];
    // tasks = tasks.map(task => {
    //   if (task.id === id) {
    //     task.active = false;
    //   }
    //   return task;
    // });
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({ tasks });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };
  render() {
    return (
      <div className="App">
        <h1>ToDo APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
