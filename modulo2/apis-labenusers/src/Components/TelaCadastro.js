import React from "react";
import axios from "axios";


export default class TelaCadastro extends React.Component{
   state = {
       nome : "",
       email: "",
   }
   
   handleNome = (event) => {
       this.setState({ nome:event.target.value}) // sempre isso , antenção a sintaxe
   }
   

   handleEmail = (event) => {
       this.setState({email:event.target.value}) // as Funções estao guradando o estado// levar para input
   }
   

   fazerCadastro = () => {
    
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    
    const body = {
        name:this.state.nome,
        email:this.state.email
    }

    
     axios.post(url,body,{
         headers:{
            Authorization: "ewerton-francis-moreira"
         }
     })
    .then((res) => {
       //console.log(res) 
      alert("Usuário(a) cadastrado com sucesso ")
      this.setstate({name:"", email:""})
    })
    .catch((err)=>{
     //console.log(err)  
     alert("err.res")    // não está mostrando o Alert

    })
    
   } 
    render(){
        return( 
            <div>
                <button onClick={this.props.irParaLista}> Ir para Lista de Usuários</button>
                <h2>Cadastro</h2>
                <input 
                placeholder={"Nome"}
                value ={this.state.nome}
                onChange={this.handleNome} //Onchange pa Input Controlados
                />

                <input 
                placeholder={"E-mail"}
                value={this.state.email}
                onChange={this.handleEmail} // responsavel por setar as funções do input
                />               
                
                <button onClick={this.fazerCadastro}>Cadastrar</button>  
            </div>
        )
    }
}