
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import { useState } from "react"
import { Card } from "./Card"
import './style.scss'
function App() {
  // Aqui você irá criar os Estados para manipular os Inputs
  const [nomeTime, setNomeTime] = useState('')
  const [imagemEscudo, setImagemEscudo] = useState('')
  const [formularioErro, setFormularioErro] = useState('')
  const [todoTime, setTodoTime] = useState(
    [
      {
        id: 1,
        nome: 'Palmeiras',
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

  function cadastrarTime(evento) {
    evento.preventDefault()

    const novoTimeCadastrado = {
      nome: nomeTime,
      imagem: imagemEscudo

    }

    if (nomeTime === '' || imagemEscudo === '' || nomeTime.trim().length <= 3) {

      setFormularioErro(true)

    } else if (imagemEscudo.length <= 6 || !imagemEscudo.substring(0, 6).match(/\d/)) {
      /*verifica se possui no mínimo 6 caracteres e 
        se dentro da string possui um numero
      */
      setFormularioErro(true)

    } else {

      setFormularioErro(false)

      setTodoTime([...todoTime, novoTimeCadastrado])

      /*deixa os inputs em branco*/
      setNomeTime('')
      setImagemEscudo('')

    }



  }


  return (
    <div className="App">
      <main className="telaPrincipal">
        <h1>ADICIONAR NOVO TIME</h1>
        {/* <h4>Nome do time</h4> */}
        <form>
          <section className="containerFlex">
            <div>
              <label htmlFor="">Nome do time</label>
              <input id="nomeTime" type="text" value={nomeTime} onChange={evento => setNomeTime(evento.target.value)} />
            </div>

            <div>
              <label htmlFor="">Escudo do Time (link)</label>
              <input id="imagemEscudo" type="text" value={imagemEscudo} onChange={evento => setImagemEscudo(evento.target.value)} />
            </div>
          </section>


          <button class="btn btn-1" type="submit" onClick={evento => cadastrarTime(evento)}>ADICIONAR </button>

          {
            formularioErro ? (
              <span>Por favor, verifique os dados inseridos no formulário</span>
            ) : null
          }

          <h1>TIMES ADICIONADOS</h1>
          {/* Comece a desenvolver o seu Código por aqui :) 
      typecolor ou typetext*/
            todoTime.map(
              time => {
                return (
                  <Card dadoTime={time}
                    chave={time.id}
                  />
                )
              }
            )


          }


        </form>



      </main>
    </div>
  )
}

export default App