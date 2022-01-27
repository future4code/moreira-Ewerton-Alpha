import React from "react"

export default class OutraTela extends React.Component {
    render(){
      return (
        <div >
        <h2>Detalhes</h2>
        <button onClick={this.props.Tela1}>ir para Gênero</button>
        </div>
      );
    }
    
  }