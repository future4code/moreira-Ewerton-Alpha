import axios from "axios";
import React from "react";

export default class extends React.Component{
    state ={
        usuarios:[]
    }
    
    componentDidMount() {
      this.pergarUsuarios()
    }

    pergarUsuarios = () => {
        const url = " https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.post(url,{
            headers : {Authorization: "ewerton-francis-moreira"

            }
        })
        .then((resp)=>{
            console.log(resp)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }
    
    
    render(){
        return( 
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
            </div>
        )
    }
}