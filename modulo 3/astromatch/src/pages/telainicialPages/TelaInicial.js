import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
 



const Container = styled.div`
background-color:red;
margin:0;
display: flex;
flex-direction: column;
align-items: center;
flex-wrap: nowrap;
`




// const ContainerFilho =styled.fieldset`
//  margin-left: auto;
//  margin-right: auto;
//  margin-top:120px;
//  width:30%;
//  height:600px;
//  border-radius:10px;
//  background-color:blue;
//  button{
//   margin-left: 100px;
//   margin-right:100x;
//   margin-top:400px;
//   cursor: pointer;
//   transistion
  
  
  

//   }
 
//  `
 
const ContainerFilho =styled.fieldset`
display:flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: space-around;
align-items: center;
background-color:blue;
margin-left:50px;
margin-right:10px:
border-radius:10px;
border-
 
 
 

 }

`



const Titulo = styled.div`
display:flex;
align-items: center;
justify-content: center;
background-color:green;
font-size:20px;

 ` 
const Button = styled.div`
display:flex;
margin:20px;

`
 
 
 

 export function TelaIncial (props){

   const [perfil,setPerfil] = useState([])
   
   const [match,setMatch] = useState(false)
   

   useEffect(()=>{
    getProfile()
  },[])


   const getProfile = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ewerton/person")
   .then((res)=>{
    setPerfil(res.data.profile)
    console.log(res.data.profile)
  })
   .catch((err)=>
   console.log(err.response))

  }  
   const ChoosePerson = () => {
     
      const body = {id:perfil.id,choice:true}  
     axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ewerton/choose-person",body)
      .then((res)=>{
        alert("Você deu Match")
        setMatch(res.data)
        getProfile()
     })
      .catch((err)=>console.log(err.response))}
      
      return (
        <Container>
          <ContainerFilho>
           <Titulo>
            <h1>Astromatch</h1>
            <button onClick={props.listaMatches} >proximo</button>
           </Titulo>
           <hr></hr>
          
           <img src={perfil.photo} alt={perfil.name}></img>
         <div>tamanho</div>
         <p1>{perfil.age}</p1>
         <p2>{perfil.name}</p2>
         <p3>{perfil.bio}</p3>
         
         
         
         <Button> 
         <button onClick={()=>getProfile()}>Não</button>
         <button onClick={()=>ChoosePerson()}>Sim</button>
         </Button>
         
         </ContainerFilho>
         
          
        </Container>
      );
   }
       
  