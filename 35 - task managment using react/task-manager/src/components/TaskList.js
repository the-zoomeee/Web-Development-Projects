// src/components/TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, editTask, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
