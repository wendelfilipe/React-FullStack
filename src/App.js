import { useEffect, useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

let initialState = [
{
  id : 1,
  prioridade: "1",
  titulo: "primeira atividade",
  descricao: "primeira atividade"
},

{
  id : 2,
  prioridade: "3",
  titulo: "segunda atividade",
  descricao: "segunda atividade"
}]

function App() {
  const [index, setIndex] = useState(0)
  const [atividades, setAtividades] = useState(initialState)
  const [atividade, setAtividade] = useState({id: 0});

  useEffect(() => {
    atividades.length <= 0 ? setIndex(1) : 
    setIndex(Math.max.apply(Math, atividades.map((item) => item.id)) + 1)
  }, [atividades])

  function addAtividade (ativ) {
    setAtividades([...atividades, { ...ativ, id: index}])
  }

  function pegarAtividade(id){
    const atividade = atividades.filter(atividade => atividade.id === id)
    setAtividade(atividade[0])
  }

  function cancelarAtividade(){
    setAtividade({id: 0})
  }

  function atualizarAtividade(ativ){
    setAtividades(atividades.map(at => at.id === ativ.id ? ativ : at))
    setAtividade({id: 0})
  }

  function deletarAtividade(id){
    const atividadesFiltradas = atividades.filter(atividade => atividade.id !== id)
    setAtividades([...atividadesFiltradas])
  }
  

  return (
    <>
        <AtividadeForm 
            addAtividade={addAtividade}
            cancelarAtividade={cancelarAtividade}
            atualizarAtividade={atualizarAtividade}
            atividades={atividades}
            ativSelecionada={atividade}
        />
        <AtividadeLista
          atividades={atividades}
          deletarAtividade={deletarAtividade}
          pegarAtividade={pegarAtividade}
        />
    </>
  );
}

export default App;
