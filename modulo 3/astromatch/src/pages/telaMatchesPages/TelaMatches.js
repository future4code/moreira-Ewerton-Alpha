import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import {useEffect} from 'react'
  

   
   
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
           <img src ={lista.photo}></img>
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
         <button onClick={props.voltar}>voltar</button>
         <h1>seusMatches</h1>
         <li>
          {novaLista}
         </li>
          <button onClick={putClear}>Apagar</button>
        
    
          
        </div>
      );  
    }