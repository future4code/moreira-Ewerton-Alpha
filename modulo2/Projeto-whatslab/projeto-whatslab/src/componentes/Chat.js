import React from "react"
import { AiOutlineSend } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import ContainerInput from "./ContainerInput";
import styled from "styled-components"
import Imagem from "../image/whatslabb.jpg"
import Logo from "../image/chat.png"



const Container = styled.div`
height: 95vh; 
display:flex;
flex-direction: column;
align-items: center;
margin-top:2vh;
width:55%;
margin-left:30vh;
border: solid;
border-width: 2px;
border-height:40px;
border-radius:15px 90px; 
background-color: aquamarine;



h1{
  font-size:60px;
  margin-top:1vh;
  margin-bottom:-2vh;
  
}
  
p{
 
  text-align: center;
  background-color:#FF00FF;
  height:30px;
  border-radius:2px; 
  font-weight: bolder;
}


form{
  margin-top:-25px;
  height:78vh; 
  width:50%;
  border:solid;
  border-width: 8px;
  border-height:30px;
  border-radius:10px;
  img{
    height:40vh;
    width:38vh;
   }
  
   input .name{
     margin-top:10vh;
     margin-right:60vh;
     height:3vh;
     width:20vh;
     border-radius:5px; 
    
    
  }
    .name{

    }
  button{
    margin-top:20vh;
    height:8vh;
    width:8vh;
    margin-left:30vh;
  }
}





`



const Segunda = styled.img`
height:5vh;
`
const Input1 = styled.input`

`

class Chat extends React.Component {
  
  state = {
    nome :"",
    mensagem: "",
    // novaMensagem: [this.state.mensagem],
    
  }
  
  onchangeNome = (event) => {
    this.setState({nome:event.value})
  }

  onchangeMensagem =(event) => {
    this.setState({mensagem:event.value})
  }
  
  // atualiza = (event) => {
  //   this.novaMensagem.map((item){
  //     return( <h2>nome:{item.nome}</h2>
  //            <p>mensagem:{item.mensagem}</p> )
  //   })
  // }

  onClick = (event) => {
    event.preventDefault()
    console.log(event)
    this.onchangeNome(event.target[1])               
    this.onchangeMensagem(event.target[2])
  }
  
   
  //  novaMensagem = [{
  //     nome : this.state.nome ,
  //     mensagem: this.state.mensagem
  //   }]
    
//     atualiza = this.novaMensagem.map((item)=>{
//       return (<h2>nome:{item.nome}</h2>
//              <p>mensagem:{item.mensagem}</p>
              
  
//       })      
//  }
  
  render() {
    return (
      <Container>
        
        <h1 >Whatslab</h1>
        
          <h2>{this.props.nome}</h2>
          
          <form  onSubmit={this.onClick}> 
              <p>Aguarde que o bot chat já responde </p>
              <img src={Imagem}></img>
              
              <h2>nome:{this.state.nome}</h2>
              <p>mensagem:{this.state.mensagem}</p>
             
             
              <button 
              type="submit">enviar </button>
             
             
              <input classe ="name"                                 //definir classe para o input
              placeholder= "nome"
              value={this.state.onchangeNome}
              
              />
              <input
              placeholder="insira aqui sua mensagem"
              value={this.state.onchangeMensagem}
              
              />
              
              
               
              {/* <ContainerInput /> */}
               
          </form>
          
          <Segunda src={Logo}></Segunda>
          
      </Container>
    );
  }
}

export default Chat