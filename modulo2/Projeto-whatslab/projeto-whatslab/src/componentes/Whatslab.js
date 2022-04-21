// import React from 'react';
// import styled from 'styled-components'




// const Container = styled.div`
// margin-top: 10vh;


// `
// const AppContainer2 = styled.div`
//   border: 1px  solid black;
//   height: 80vh;
//   box-sizing: border-box;
//   width: 260px;
//   margin-top:80px;
//   margin:auto;
//   display: flex;
//   flex-direction: column;
// `

// const MessagesContainer = styled.div`
//   flex-grow: 1;
//   padding: 16px;
//   display: flex;
//   flex-direction: column-reverse;
// `

// const InputsContainer = styled.div`
//   display: flex;
// `

// const NameInput = styled.input`
//   width: 40px;
// `

// const MessageInput = styled.input`
//   flex-grow: 1;
// `

// class Whatslab extends React.Component {
//   state = {
//     messages: [],
//     userValue: '',
//     messageValue: ''
//   }

//   onChangeUserValue = (event) => {
//     this.setState({userValue: event.target.value})
//   }

//   onChangeMessageValue = (event) => {
//     this.setState({messageValue: event.target.value})
//   }

//   sendMessage = () => {
//     const newMessage = {
//       user: this.state.userValue,
//       text: this.state.messageValue
//     }

//     const newMessagesArray = [newMessage, ...this.state.messages]

//     this.setState({messages: newMessagesArray, messageValue: ''})
//   }

//   render() {
//     return (
//         <Container>
//       <AppContainer2>
//         <MessagesContainer>
//           {this.state.messages.map((message, index) => {
//             return <p key={index}>
//               <strong>{message.user}</strong>: {message.text}
//             </p>
//           })}
//         </MessagesContainer>
//         <InputsContainer>
//           <NameInput
//             onChange={this.onChangeUserValue} 
//             value={this.state.userValue} 
//             placeholder={'Nome'}
//           />
//           <MessageInput
//             onChange={this.onChangeMessageValue} 
//             value={this.state.messageValue} 
//             placeholder={'Mensagem'}
//           />
//           <button onClick={this.sendMessage}>Enviar</button>
//         </InputsContainer>
//       </AppContainer2>
//       </Container>
//     );
//   }
// }

// export default Whatslab;
