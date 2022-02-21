import axios from "axios";

import React , { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 400px;

  h1 {
    font-size: 60px;
  }

  input {
    border-radius: 25px;
    margin-top: 10px;
    height: 20px;
  }

  button {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 150px;
  }
`;

export const Logon = () => {
  // Desafio: tentar fazer com ouotra sintaxe assync com try
  // criacao do estado para guardar informacoes realcionadas da api

  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  //criar inputs controlados para reber valores e guarda no estado

  
  

  const voltarHome = () => {
    navigate("/");
  };

  const onchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onchangePassoword = (e) => {
    setPassoword(e.target.value);
  };
 
  const navigate = useNavigate();
  
  // Função do ONclick
  const irParaAdminitrativo = () => { 
    const headers = {"Content-Type":"application/json"}
    const body = {
      email: email,
      password: password,
    };
    //depois trocar por uma Base Url
    axios
      .post(
        'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:ewerton-moreira/login',
        body,headers)

      .then((response) => {
        console.log("Deu Certo: ", response.data.token);
        localStorage.setItem("token",response.data.token)
         
          navigate ('/Administrativo')
      })
      .catch((error) => {
        console.log("Deu Errado: ", error.response);
      });
  };
    
  return (
      <Container>
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
        <div>
          <button onClick={voltarHome}>Voltar</button>
          <button onClick={irParaAdminitrativo}>Acessar</button>
        </div>
      </Container>
    );
  
}
