import React from "react"
import TelaCadastro from "./Components/TelaCadastro"
import TelaListaUsuarios from "./Components/TelaListaUsuarios"


export default class App extends React.Component {
  // estado da tela
 state = {
    telaAtual:"cadastro"
  }
  
  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro" :
      return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista" :
       return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
       default:
       return <div>Error! Página não Encontrada</div>
    }
  }

   irParaCadastro = () => {
    this.setState({telaAtual:"cadastro"})
   }

   irParaLista = () => {
     this.setState({telaAtual:"lista"})

   }

  render (){
      
    return (
        <div>
         {this.escolheTela()}
        </div>
      )

  }
}



