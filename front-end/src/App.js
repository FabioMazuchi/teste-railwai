import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const getTarefas = async () => {
    const { data } = await axios('http://localhost:3001/tarefa')
    setTarefas(data);
  }

  useEffect(() => {
    getTarefas();
  }, [])

  return (
    <div className="App">
      {tarefas.map(({ description }, id) => (
        <h3 key={ id }>{ description }</h3>
      ))}
    </div>
  );
}

export default App;
