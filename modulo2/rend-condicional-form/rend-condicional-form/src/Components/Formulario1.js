import React, { Component } from "react";
// import styled from 'styledComponents'



// const Container = styled.div'
//     background-color = green
//    ''
   


export default class Formulario1 extends React.Component {
  




  render() {

  



    return (
      
        <div>
        <h1>Etapa 1-Dados Gerais</h1>
        
        <div>
            
                 <p>1.Qual seu Nome ?</p>
          <input classeName={`nome`} placeholder="insira o nome" />
            
          
        </div>
        <div>
           
               <p>2.Qual sua idade ?</p>
          <input classeIdade={`idade`} placeholder="insira a idade" />
           
          
        </div>
        <div>
            
                <p>3.Qual seu email ?</p>
          <input classeEmail={`email`} placeholder="insira o email" />
            
          
        </div>
         <p>4.Qual sua escolaridade ?</p>
        <select>
            
          <option>"Ensino medio Incompleto"</option>

          <option>"Ensino medio Completo"</option>

          <option>"Ensino Superior Incompleto"</option>

          <option>"Ensino Superior Completo"</option>
        </select>

        <button onClick={this.props.home}>Proxima</button>
        
        </div>
      
    );
  }
}
