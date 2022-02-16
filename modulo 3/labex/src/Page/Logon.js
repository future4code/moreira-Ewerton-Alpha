import axios from "axios";
import React from "react";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";








export const Logon = () => {
  // Desafio: tentar fazer com ouotra sintaxe assync com try
  //criacao do estado para guardar informacoes realcionadas da api

  const [email, setEmail] = useState('');
  const [password, setPassoword] = useState('');

  //criar inputs controlados para reber valores e guarda no estado

  const onchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onchangePassoword = (e) => {
    setPassoword(e.target.value);
  };

 
  const irParaAdminitrativo = () => {
    const body = {
      email: email,
      password: password,
    };
         
    //depois trocar por uma Base Url
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Ewerton/login",body
      )
      .then((response) => {
        console.log("Deu Certo: ", response.data);
      })
      .catch((error) => {
        console.log("Deu Errado", error.response);
      });
  };

   const navigate = useNavigate();
   const voltarHome = () => {
     navigate("/");
   };





  return (
    <div>
      <h1> Faça Aqui seu Login </h1>
      
      <div>
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={onchangeEmail}
        ></input>
        <input
          placeholder="senha"
          type="password"
          value={password}
          onChange={onchangePassoword}
        ></input>
      </div>

      <button onClick={voltarHome}>Voltar</button>
      <button onClick={irParaAdminitrativo}>Entrar</button>
    </div>
  );
};
