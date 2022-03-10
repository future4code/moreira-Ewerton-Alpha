import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
//ficar atento a sintaxe do objetos no array e a sintaxe do texto
  state={
        listaDosPost: [ {
          
          nomeUsuario:'Laura',
          fotoUsuario:'https://picsum.photos/50/50',
          fotoPost:'https://picsum.photos/200/150',
         
        },
        { nomeUsuario:'Lucas',
          fotoUsuario:'https://images.unsplash.com/photo-1610023787041-37c6f68fd375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          fotoPost:'https://images.unsplash.com/photo-1621609764095-b32bbe35cf3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',

        },
        { nomeUsuario:'Luna',
          fotoUsuario:'https://images.unsplash.com/photo-1641982343852-3d75c2eb7e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          fotoPost:'https://images.unsplash.com/photo-1641990458432-9c60bcdf8e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',

        }],
        valorInputPessoa:""
      }

      Onchangeinputpessoa=(event)=>{
        this.State({ valorInputPessoa:event.target.value });
      };


      

      render(){
       
       
        const listaDosPost=this.state.listaDosPost.map((post,index)=>{
        return <Post key={index}
        
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        
         />
        })
      
         


       return (
      
      
      <MainContainer>
        <input 
        value ={this.state.listaDosPost}
        onChange={this.state.Onchangeinputpessoa}
        placeholder={"Nome"}
         />
        <button onClick={this.adicionaPessoa}>Adicionar</button>
        {listaDosPost}
      </MainContainer>
        
      );
    }
}

export default App;
