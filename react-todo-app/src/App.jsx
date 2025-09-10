import React from 'react';
import Task from './components/Task';

function App() {
  const tasks = [
    { title: 'Estudar React', responsible: 'João', status: 'Concluída' },
    { title: 'Criar uma aplicação', responsible: 'Maria', status: 'Em andamento' },
    { title: 'Revisar código', responsible: 'Pedro', status: 'Pendente' },
  ];

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      {tasks.map((task, index) => (
        <Task 
          key={index} 
          title={task.title} 
          responsible={task.responsible} 
          status={task.status} 
        />
      ))}
    </div>
  );
}

export default App;