// import styledComponents from "styled-components";
import Formulario1 from "./Components/Formulario1";
import Formulario2 from "./Components/Formulario2";
import Formulario3 from "./Components/Formulario3";
import Obrigado from "./Components/Obrigado"
import React from "react"



class App extends React.Component {
  state = {
    etapa:1 ,
    
  };

  renderenizaEtapa = () =>{
   switch (this.state.evento){
     case 1:
     return <Formulario1/>

     case 2:
     return <Formulario2/>

     case 3:
     return <Formulario3/>

     case 4 :
       return <Obrigado/>

    }

  }

  irParaProximaEtapa = (event) => {
   return this.state +1
  }






  render (){ 
  return (
    <div className="App">
      <div>
      <Formulario1/>
      </div>
      <div>
      {this.renderenizaEtapa()}
      <button onClick={this.setState.state}>Próxima etapa</button>
      </div>
    </div>
  );
}
}

export default App;
