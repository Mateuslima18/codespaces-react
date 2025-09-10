import React from 'react';
import './Task.css';

function Task({ title, assignee, status }) {
  return (
    <div className={`task ${status ? 'completed' : 'pending'}`}>
      <h3>{title}</h3>
      <p>Responsável: {assignee}</p>
      <p>Status: {status ? 'Concluída' : 'Pendente'}</p>
    </div>
  );
}

export default Task;