import './tarefa.css';

function Tarefa({ titulo, responsavel, concluida }) {
  return (
    <div className={`tarefa ${concluida ? 'concluida' : ''}`}>
      <h2>{titulo}</h2>
      <p><strong>Responsável:</strong> {responsavel}</p>
      <p>Status: {concluida ? 'Concluída' : 'Pendente'}</p>
    </div>
  );
}

export default Tarefa;