import React from 'react';

const Task = (props) => {

    if (props.task.active) {
        return (
            <div>
                <p>{props.task.text} - do <span>{props.task.date}</span>
                    <button onClick={() => { props.changeTaskStatus(props.task.id) }} > Zostało zrobione</button>
                    <button onClick={() => { props.delete(props.task.id) }}>X</button>
                </p>

            </div>
        );
    } else {

        const finish = new Date(props.task.finishDate).toLocaleString()
        return (
            <div>
                <p>{props.task.text} - do <span>{props.task.date}</span> - potwierdzenie wykonania zadania : {finish}
                    <button onClick={() => { props.delete(props.task.id) }}>X</button>
                </p>

            </div>
        );
    }


}

export default Task;