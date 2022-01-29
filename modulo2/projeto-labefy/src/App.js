import React from "react";
import Tela1 from "./Components/Tela1";
import OutraTela from "./Components/OutraTela";





export default class App extends React.Component {
  
  state = {
     home:"genero",
     
  }
  
  componentDidMount= () =>{
    
  }



  escolheTela = () => {
    switch (this.state.home){
      case "genero":
        return <Tela1 />
      case  "lista" :
        return <OutraTela  />
        default:
          return <div>Erro!Página não encontrada</div>
    }
    
  }
 
  // irParaGenero = ()=>{
  //   this.setState({home:"genero"})
  // }                                         //=. funções para os botõs não é prioridade agora

  // irParaLista = ()=> {
  //   this.setState({OutraTela:"lista"})

  // }

  
  render(){
    return (
      <div >
      {this.escolheTela()}
      </div>
    );
  }
  
}