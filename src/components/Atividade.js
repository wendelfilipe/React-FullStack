import React from 'react'

export default function atividade(props) {
  function prioridadeLabel(param){
    switch(param){
      case '1':
        return 'Baixa'
      case '2':
        return 'Nornal'
      case '3':
        return 'Alta'
      default:
        return 'Não definido'
    }
  }
  function prioridadeStyle(param){
    console.log(param)
    switch(param){
      case '1':
          return "success"
      case '2':
          return "dark"
      case '3':
        return "warning"
      default:
        return 'Não definido'
    }
  }

  return (
    <div className={"card mb-2 shadow-sm border-" +   prioridadeStyle(props.ativ.prioridade)}>
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <h5 className='card-title'>
                          <span className='badge bg-secondary me-1'>
                            {props.ativ.id}
                          </span>
                          - {props.ativ.titulo}
                        </h5>
                        <h6>
                          Prioridade:
                          <span className={'ms-1 text-' + prioridadeStyle(props.ativ.prioridade)}>
                              {prioridadeLabel(props.ativ.prioridade)}
                          </span> 
                        </h6>
                      </div>

                      <p className="card-text">
                        {props.ativ.descricao}
                      </p>
                        <div className='d-flex justify-content-end pt-2 m-0 border-top'>
                          <button className='btn btn-sm btn-outline-primary me-2' onClick={() => props.pegarAtividade(props.ativ.id)}>Editar</button>
                          <button className='btn btn-sm btn-outline-danger' onClick={() => props.deletarAtividade(props.ativ.id)}>
                            Deletar
                          </button>
                        </div>
                    </div>
                  </div>
  )
}
