import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React,{useState,useEffect}from 'react'
import styled from "styled-components"

const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // margin-top: 400px;

  h1 {
    font-size: 60px;
  }

  // input {
  //   border-radius: 25px;
  //   margin-top: 10px;
  //   height: 20px;
  // }

  // button {
  //   flex-direction: row;
  //   justify-content: space-between;
  //   margin-top: 150px;
  // }
`;


export const  Administrativo = ()=> {
  
  const [nametrip,setnameTrip]= useState([]);
  const [deletar,setDeletar]= useState("");

  const getTrips =()=>{
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips')
    .then ((response)=>{
     setnameTrip(response.data.trips)
    console.log(response.data)
    }).catch ((error)=>{
   console.log(error)
    })
      
  }
  
  const Excluir = (id) => {
    const url =`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips/${id}`
    const headers= {auth:localStorage.getItem("token")}
   axios.delete(url,headers)
  .then((res)=>{
   setDeletar(res.data)
   alert("excluido com Sucesso")
   getTrips()
   console.log(res.data)


  }).catch((error)=>{
    console.log(error.data)
    alert("tente novamente")
  })

  } 
   
  useEffect(()=>{
   getTrips()
  },[])



    const trasViagem = nametrip.map((viagem)=>{
      return <div key={viagem.id}>
        <p>nome:{viagem.name}</p>
        <button onClick={()=>{Excluir(viagem.id)}}>Deletar</button>
        </div>
    })
  
const navigate = useNavigate()
  
    const voltarHome = () => {
      navigate('/')
    }
         
    const irParaLogon = () => {
      navigate('/Logon')
    }

    const irParaCriacaoViagens = () => {
      navigate('/CriarViagens')
    }

    const irParaDetalhes = () => {
      navigate('/Detalhes')
    }
    
   return (
        <Container>
        <h1> Painel Administrativo </h1>  
        <div>{trasViagem}</div>
        <button onClick={voltarHome}>home</button>
        <button onClick={irParaLogon}>Logon</button>
        <button onClick={irParaDetalhes}>Detalhes</button>
        <button onClick={irParaCriacaoViagens}>criar Viagem</button>

         </Container>
      );
    }