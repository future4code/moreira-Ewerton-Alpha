import { useEffect, useState } from "react"
import { fetchConcurso } from "../../services/requests"


export default function Concursos() {
    
  const [concursos,setConcursos]= useState([]);

   useEffect(()=>{
   fetchConcurso().then((concursos) =>{
       setConcursos(concursos);
   })

   console.log(concursos)
   },[])
      
    return (
      <select id = "numeracao">
      <option value="">numeracao</option>
       {concursos.map((numeracao)=>{
        const {id,nome} = numeracao;
        return(<option key={id}value={id}>{nome}</option>)
      })}
      </select>
   )
  }