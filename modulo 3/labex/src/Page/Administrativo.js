import React from 'react';
import { useNavigate } from 'react-router-dom';


export const  Administrativo = ()=> {
    
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
    
   return (
        <div >
        <h1> Painel Administrativo </h1>  
        
        <button onClick={voltarHome}>Voltar</button>
        <button  onClick={irParaLogon}>Logon</button>
        <button onClick={irParaCriacaoViagens}>criar Viagem</button>
        <div>   
        <button>Deletar Viagem</button>
        </div>
        
        
        </div>
      );
    }