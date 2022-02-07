import React from "react";
import Tela1 from "./Components/Tela1";
import OutraTela from "./Components/OutraTela";





export default class App extends React.Component {
  
  state = {
     home:"genero",
     
  }
  
  componentDidMount= () =>{                // executar automaticamente
    
  }

  irParaGenero = ()=>{
    this.setState({home:"genero"})
   }                                         //=. funções para os botõs não é prioridade agora
 
   irParaLista = ()=> {
     this.setState({home:"lista"})
 
   }
 

  escolheTela = () => {
    switch (this.state.home){
      case "genero":
        return <Tela1  irParaLista={this.irParaLista}/>
      case  "lista" :
        return <OutraTela voltar={this.irParaGenero} />
        default:
          return <div>Erro!Página não encontrada</div>
    }
    
  }
 
 
  
  render(){
    return (
      <div >
      {this.escolheTela()}
      </div>

    );
  }
  
}