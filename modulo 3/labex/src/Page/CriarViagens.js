import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { planets } from "../constante/Planetas";
import axios from "axios";
import useForm from "../Hooks/useForms";

const Container = styled.div`
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;


  h1 {
    margin-top:150px;
    text-align: center;
    color:white;
    font-size: 40px;
  }

  input{ 
    width:30%;
    margin: 15px auto 0 auto;
    height:30px;
    font-size:25px;
    padding-left:10px;
    border-radius:10px;
    border:none;
  }
  button{
    voltar 
  }

`;

export const CriarViagens = () => {
  const [idtrip, setTripId] = useState("");
  const [trip, setTrip] = useState("");

  const routes = useNavigate();

  const goToHome = () => {
    routes("/Administrativo");
  };

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const limparformulario = () => {
    cleanFields();
    setTripId("");
  };

  const cadastrar = (event) => {
    event.preventDefault();

    enviarFormulario(form, idtrip, limparformulario);

    console.log("Formulário enviado!", form);
    cleanFields();
  };

 
 

  const enviarFormulario = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips`;

    const headers = { auth: localStorage.getItem("token") };

    axios
      .post(url, form, { headers })
      .then((res) => {
        setTrip(res.data.success);
        alert("enviado");
        limparformulario();
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.res.message);
      });
  };

  const navigate = useNavigate();

  const voltarListaViagens = () => {
    navigate("/ListaDeViagens");
  };

 

  return (
    <Container>
      <h1>Criar Viagem </h1>

      <form onSubmit={cadastrar}>
          <input
              name={"name"}
              value={form.name}
              placeholder="Nome"
              onChange={onChange}
              required
              pattern={"^.{3,}"}
              title={"O nome deve ter no mínimo 3 letras"}
            />
             <select
              name={"planet"}
              value={form.planet}
              placeholder="Planeta"
              onChange={onChange}
              required
            >
          <option value={""} disabled>Escolha um Planeta</option>
            {planets.map((item)=>{
              return <option value={item} key={item}>{item}</option>
            })}
          </select>
          

            <input
              name={"date"}
              value={form.date}
              placeholder="Texto de Candidatura"
              onChange={onChange}
              pattern={"^.{3,}"}
              required
              type={"date"}
            />
            
            <input
              name={"description"}
              value={form.description}
              placeholder="Descrição"
              onChange={onChange}
              pattern={"^.{3,}"}
              required
              title={"A descrição deve ter no mínimo 3 caracteres"}
            />
            <input
              name={"durationInDays"}
              value={form.durationInDays}
              placeholder="Duração da viagem"
              onChange={onChange}
              type="number"
              required
            />
            <button type="submit">enviar</button>
            </form>
    </Container>
  );
};
