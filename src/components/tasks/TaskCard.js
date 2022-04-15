import React from "react";

export const TaskCard = ({ task, deleteTask, completeTask }) => {
    
    
  return (
    <>
      <div>
        <h2>{task.name}</h2>
        <div> {task.expectedCompletion}</div>
        <label htmlFor="isComplete">Task Completed</label>
        <input
          type="checkbox"
          name="isComplete"
          id={`task--${task.id}`}
          onChange={ () => completeTask(task)}
        />
        <button type="button" onClick={() => deleteTask(task.id)}>
          Remove Task
        </button>
      </div>
    </>
  );
};
