// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit }) => {
  const [task, setTask] = useState({ id: null, title: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description) {
      if (task.id) {
        editTask(task);
      } else {
        addTask(task);
      }
      setTask({ id: null, title: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      ></textarea>
      <button type="submit">{task.id ? 'Update' : 'Add'} Task</button>
    </form>
  );
};

export default TaskForm;
