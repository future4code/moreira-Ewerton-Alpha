import React from 'react';
import styled from 'styled-components'


const AppContainer = styled.div`
border:1px solid black;
height: 100vh ;
box-sizing:border-box;
width:600px;
margin:auto;
display :flex;
flex-direction:column ;
border-radius:15px 90px;

`
const MessagesContainer = styled.div`
flex-grow:1;
padding:16px;
display :flex;
flex-direction:column-reverse   //propiedade para mostrar ao inverso caixa mensagem

`
const InputsContainer= styled.div`
 display:flex; 
//  pai //


`
 const NameInput = styled.input`
 width: 100px
 `
 const MessageInput = styled.input`
 flex-grow: 1 ;
 flex-shrink: 1;
 height:10 px;
 
 `







class App extends React.Component {
    state = {
         messages : [],
        userValue:'',
        messageValue:''
    }

     //função que atualiza o estado no input -input controlado
     onChangeUserValue = (event)=>{
         this.setState({userValue:event.target.value})
     }
     onChangeMessageValue = (event)=>{
         this.setState({messageValue:event.target.value})
     }
         
     sendMessage = () => {
         const newMessage = {
             user: this.state.userValue,
             text: this.state.messageValue
         }

         const newMessagesArray = [newMessage,...this.state.messages]////spred operatior para adicionar o estado da variavel para nova variavel
         this.setState({messages: newMessagesArray, messageValue: ''}) // atualiza o estado da lsita e limpa o input
     }


     render() {
        // para verificar qual message está vindo do estado
        // console.log(this.state.userValue)
        // console.log(this.state.messageValue)
          //estrait para manipular o array 

          
        // const msg = [
        //     {
        //         user:'Jared',
        //         text:'tudo bem'
        //     },
        //     {
        //         user:'Blob',
        //         text:'oie'
        //     },
        //     {
        //         user:'Alice',
        //         text:'Olá'
        //     }
        // ]

         return(
         <AppContainer>
         <MessagesContainer>
             {this.state.messages.map((message,index)=>{
            return<p key={index}>
            <strong>{message.user}</strong>:{message.text}
            </p>})}
        
         </MessagesContainer>
         <InputsContainer>
            <NameInput 
            onChange={this.onChangeUserValue}
            value={this.state.userValue}
            placeholder= {"name"}/>
             
             <MessageInput 
            value={this.state.messageValue}
             onChange={this.onChangeMessageValue}
             placeholder = {"mensagem"}/>
                 
             <button onClick={this.sendMessage}>enviar</button>
             
         </InputsContainer>
         </AppContainer>
         );
     }
}

export default App