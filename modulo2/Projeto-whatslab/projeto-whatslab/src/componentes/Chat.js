import React from "react"
import { AiOutlineSend } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import ContainerInput from "./ContainerInput";
import styled from "styled-components"
import Imagem from "../image/whatslabb.jpg"
import Logo from "../image/chat.png"



const Container = styled.div`
height: 100vh; 
display:flex;
flex-direction: column;
align-items: center;
margin:0 auto;
width:55vw;
overflow:hidden;           
border: solid;
border-width: 2px;
border-height:40px;
border-radius:15px 90px; 
background-color: aquamarine;
`

const Titulo = styled.h1`
font-size:2 rem;
margin-top:1vh;


`

const MensagemBot = styled.p`
text-align: center;
background-color:#FF00FF;
height:30px;
border-radius:2px; 
font-weight: bolder;
width:100%;
`

  
const Formulario = styled.form`
margin-top:25px;
  height:78vh; 
  width:50%;
  border:solid;
  border-width: 8px;
  border-height:30px;
  border-radius:10px;
  // img{
  //      height:40vh;
  //      width:38vh;
  //    }

  
`

const InputNome = styled.input`
margin-top:71vh;
margin-right:60vh;
height:30px;
width:80%;
border-radius:2px;

    

`
const InputMensagem = styled.input`

margin-right:60vh;
height:30px;
width:80%;
border-radius:2px;

`

const Botao = styled.button`
margin-left:81%;
width:20%;
height:8vh;
gin-left:60vh;



`









const Segunda = styled.img`
height:5vh;
`

class Chat extends React.Component {
  
  state = {
    nome :"",
    mensagem: "",
    novasMensagens:[]
    // antigasMensagens:[] 
    // [
    //   {
    //     nome: this.state.nome,
    //     mensagem: this.state.mensagem
    //     }
    // ],
    
  }
 
  
  onchangeNome = (event) => {
    this.setState({nome:event.value})
  }

  onchangeMensagem =(event) => {
    this.setState({mensagem:event.value})
  }
  


  onClick = (event) => {
    event.preventDefault()
    console.log(event)
    this.onchangeNome(event.target[0])               
    this.onchangeMensagem(event.target[1])
    
  }
    
 
   atualizaMensagem = () => {
   
    const acrescentaMensagem = [this.state.nome,this.state.mensagem,...this.state.mensagem]
    this.setState({mensagem:acrescentaMensagem})
    
    
  }

  

  
  render() {
    return (
      <Container>
        
        <Titulo>Whatslab</Titulo>
        <MensagemBot>Aguarde que o bot chat já responde </MensagemBot>
        <h2>nome:{this.state.nome}</h2>
        <p>mensagem:{this.state.mensagem}</p>
             
          
          <Formulario onSubmit={this.onClick}> 
              
              {/* <img src={Imagem}></img> */}
              
              
             
             
             
             
              <InputNome                                 
              placeholder= "nome"
              value={this.state.onchangeNome}
              />

              <InputMensagem
              placeholder="insira aqui sua mensagem"
              value={this.state.onchangeMensagem}
              />
              
              <Botao 
              type="submit">enviar </Botao>
               
         
               
          </Formulario>
          
          <Segunda src={Logo}></Segunda>
          
      </Container>
    );
  }
}

export default Chat