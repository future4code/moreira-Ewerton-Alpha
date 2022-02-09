import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import { Base_url } from '../../constants/url';



const Container = styled.div`


`




const ContainerFilho =styled.fieldset`
 margin-left: auto;
 margin-right: auto;
 margin-top:120px;
 width:30%;
 height:600px;
 border-radius:10px;
 button{
  margin-left: 100px;
  margin-right:100x;
  margin-top:400px;
  cursor: pointer;
  transistion
  
  

  }
 
 `



const Titulo = styled.h1`
display:flex;
align-items: center;
justify-content: center;
background-color:green;
font-size:20px;

 ` 

 
 
 

 export function TelaIncial (){

  // const [lista,setLista] = userState("")

  // getProfile = () => {
  //   axios.get(`${Base_url}/person`)
  //   .then((res)=>console.log(res))
  //   .match((err)=>console.log(err.response))
  // }
    
    
     
    return (
        <Container>
          <ContainerFilho>
           <Titulo>
            <h1>Astromatch</h1>
           </Titulo>
           <hr></hr>
          
           <img></img>
         
         
         <button>Não</button>
         <button>Sim</button>
         
         </ContainerFilho>
         
          
        </Container>
      );
   }
       

   
  // 100px 90px 300px 100px
  
   
   
   
   
  
 