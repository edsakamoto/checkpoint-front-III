//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div>
      <h3>{props.dadoTime.nome}</h3>
      <img src={props.dadoTime.imagem}  width="100" height="100" alt="" />      
    </div>
  )
}