import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import {useEffect} from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'


   const AvatarM = styled.img`
   max-height:100px;
   min-height:100px;
   border-radius:50%;
   `
   
  
  export function TelaMatches (props){
    
    const [conexoes,setconexoes]=useState([])
    
    const [apagar,setApagar]= useState("")


    


    const GetMatches =() => {
      axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ewerton/matches")
     .then((res)=>{
       setconexoes(res.data.matches)
       })
      .catch((err)=>(err))
    }
    
    
    const novaLista = conexoes.map(lista=>{
      return(
         <div> 
           <AvatarM src ={lista.photo}></AvatarM>
           <p>{lista.name}</p>
         </div>
      )
    })
    
    useEffect (()=>{
      GetMatches()
     },[])



     const putClear = () => {
       axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:ewerton/clear")
       .then((res)=>{
         alert("Seus dados foram Deletados")
         })
        .catch(error=>{
          alert("Algo deu errado tente novamente ou tente mais tarde")
        }) 
     }



    return (
        <div>
         <button onClick={props.voltar}>VOLTAR</button>
         <h1>Meus Matches</h1>
         <ul>
          {novaLista}
         </ul>
          <Button disableElavation type="submit" color = "error" variant="contained" onClick={putClear}>Apagar</Button>
          
          
    
          
        </div>
      );  
    }