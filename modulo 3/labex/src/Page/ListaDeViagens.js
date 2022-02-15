import React from 'react';
import { useNavigate } from 'react-router-dom';

export const  ListaDeViagens = ()=> {
    
  const navigate = useNavigate()

  const voltarHome = () => {
    navigate('/')
  }
       
  const irParaCadastro = () => {
    navigate('/Cadastro')
  }
  
  
 return (
      <div >
      <h1>Lista de Viagens</h1>  
      <button onClick={voltarHome}>Voltar</button>
      <button onClick={irParaCadastro}>Cadastro</button>
      </div>
    );
  }