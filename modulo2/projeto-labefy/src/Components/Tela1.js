import React from "react"

export default class Tela1 extends React.Component {
    render(){
      return (
        <div >
        <h1>Labefy </h1>
        <h2>genero</h2>
        <button onClick={this.props.irParalista}>Ir para lista de Musicas</button>
        
        
       
        </div>
      );
    }
    
  }