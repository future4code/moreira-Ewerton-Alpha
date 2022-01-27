import React from "react";
import axios from "axios";
import Tela1 from "./Components/Tela1";
import OutraTela from "./Components/OutraTela";





export default class App extends React.Component {
  
  state = {
     home:"genero"
  }
  
  escolheTela = () => {
    switch (this.state.home){
      case "genero":
        return <Tela1 irParaLista={this.irParaLista}/>
      case  "lista" :
        return <OutraTela irParaGenero={this.irParaGenero} />
        default:
          return <div>Ero!Página não encontrada</div>
    }
    
  }
 
  irParaGenero = ()=>{
    this.setState({home:"genero"})
  }

  irParaLista = ()=>{
    this.setState({OutraTela:"lista"})

  }

  
  render(){
    return (
      <div >
      {this.escolheTela()}
      </div>
    );
  }
  
}