import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import React,{ useState,useEffect}  from "react"



const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 150px;

h1 {
  font-size: 60px;
  color:white;
}

button{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    
  }

`;

export const ListaDeViagens = () => {
  
  const [lista,setLista]=useState([]);
  
  useEffect(()=>{
    getTrips()
   },[])
  
   const trasViagem = lista.map((viagem)=>{
    return <div key={viagem.id}>
      <h1>nome:{viagem.name}</h1>
      <p>descrição:{viagem.description}</p>
      <p>Planeta:{viagem.planet}</p>
      <p>Duração:{viagem.durationInDays}</p>
      <p>Data:{viagem.date}</p>
      
      </div>
  })
  
  const getTrips =()=>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:ewerton-moreira/trips')
    .then ((response)=>{
     setLista(response.data.trips)
    console.log(response.data)
    }).catch ((error)=>{
   console.log(error)
    })
      
  }
    
  

  const navigate = useNavigate();

  const voltarHome = () => {
    navigate("/");
  };

  const irParaCadastro = () => {
    navigate("/Cadastro");
  };

  return (
    <Container>
      
      <h1>Lista de Viagens</h1>
      
      <button onClick={voltarHome}>Voltar</button>
      <button onClick={irParaCadastro}>Cadastro</button>
      <div>{trasViagem}</div>
      
    </Container>
  );
};
