import React, { Fragment } from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  }
  console.log(active);

  const done = props.tasks.filter(task => !task.active);
  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }
  let activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <Fragment>
      <div className="active">
        <h1>Lista tasków</h1>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>Brak zadań, ale jesteś szczęśliwym człowiekiem</p>
        )}
      </div>
      <hr />
      <div className="done">
        <h2>
          Zadania zrobione <em>({done.length})</em>
        </h2>
        {done.length > 5 && (
          <span style={{ fontSize: 10 }}>
            Wyświetlonych jest jedynie 5 ostatnich zadań
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </Fragment>
  );
};

export default TaskList;
