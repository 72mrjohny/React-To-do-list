import React from 'react';
import Task from './Task';

const TaskList = (props) => {

    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} changeTaskStatus={props.changeTaskStatus} />)
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} changeTaskStatus={props.changeTaskStatus} />)

    return (
        <>
            <div className="active">
                <h2>Lista zadań do wykonania</h2>
                {activeTasks}

            </div>
            <hr />
            <div className="done">
                <h2>Lista zadań wykonanych ({doneTasks.length})</h2>
                {doneTasks}

            </div>
        </>
    );
}

export default TaskList;
