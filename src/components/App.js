import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
  counter = 4
  state = {
    tasks: [
      {
        id: 0,
        text: 'zrobić obiad',
        date: '2020-02-29',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'umyć okna',
        date: '2020-03-30',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'zrobić zakupy',
        date: '2020-02-26',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'pościelić łóżko',
        date: '2020-02-27',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {
    console.log("delete " + id);
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id)
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log("done " + id);
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    // console.log("dodany obiekt");
    const task = {
      id: this.counter,
      text, // tekst z inputa
      date, //tekst z inputa
      important, //wartość z inputa
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))


    return true
  }



  render() {
    return (
      <div className="App">
        ToDo App
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeTaskStatus={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;



