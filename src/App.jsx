
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import { useState } from "react"
import { Card } from "./Card"

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeTime, setNomeTime] = useState('')
  const [imagemEscudo, setImagemEscudo] = useState('')
  const [todoTime, setTodoTime] = useState(
    [
      {
        id:1,
        nome:'Palmeiras',
        imagem: 'https://www.imagensempng.com.br/wp-content/uploads/2021/01/Escudo-Palmeiras-Png-1024x1024.png'        
      }
    ]
  )

  // const newTime = {
  //   id:2,
  //   nome: 'Corinthians',
  //   imagem: 'https://logodetimes.com/wp-content/uploads/corinthians.png'
  // }

  // function adicionaTime(){
  //   setTodoTime([...todoTime,newTime])
  // }

  function cadastrarTime(evento){
    evento.preventDefault()

    const novoTimeCadastrado = {
      nome: nomeTime,
      imagem: imagemEscudo

    }

    setTodoTime([...todoTime,novoTimeCadastrado])

    /*deixa os inputs em branco*/
    setNomeTime('')
    setImagemEscudo('')
  }
  

  return (
    <div className="App">
     <h1>Times de Futebol</h1>
     {/* <h4>Nome do time</h4> */}
     
     <form>
      <div>
        <label htmlFor="">Nome do time</label>
        <input id="nomeTime" type="text" value={nomeTime} onChange={evento => setNomeTime(evento.target.value)} />        
      </div>

      <div>
        <label htmlFor="">Escudo do Time (link)</label>
        <input id="imagemEscudo" type="text" value={imagemEscudo} onChange={evento =>setImagemEscudo(evento.target.value)} />
      </div>

      
      <button type="submit" onClick={evento =>cadastrarTime(evento)}>Adicionar Time</button>
      {/* Comece a desenvolver o seu Código por aqui :) 
      typecolor ou typetext*/
        todoTime.map(
          time =>{
            return(
              <Card dadoTime={time}
              chave={time.id}
              />
            )
          }
        )
      
      
      }
      

     </form>
    </div>
  )
}

export default App