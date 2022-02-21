import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import useForm from '../Hooks/useForms'
import { useState } from "react";
import useRequestData from '../Hooks/useRequestData';
import { countries } from '../constante/ListaPaíses';
import axios from 'axios';

 










const Container = styled.div`
div {
  
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
 
  
}


h1{
margin-top:200px;
text-align:center;
color:white;
font-size:80px;
} 

input{
width:50%;
margin: 15px auto 0 auto;
height:40px;
font-size:25px;
padding-left:10px;
border-radius:10px;
border:none;
    
}

button{
width:10%;
margin: 40px auto 0 310px;
padding: 10px;
font-size:25px;
background-color:rgba(141,93,251,255);
color:white;
border-radius:25px;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
:hover{
  cursor:pointer;
  background-color:#071226;
  transition-duration:1s;
 }



option{ 
  width:50%;
  margin: 15px auto 0 auto;
  height:40px;
  font-size:25px;
  padding-left:10px;
  border-radius:10px;
  border:none;
}



`




export const  Cadastro = ()=> {
 
  
  const [idtrip, setTripId] = useState("");
  const [trips] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips", {})
   
  const [sucesso,setSucesso] =useState(false)
 
 

  


 
 
  const onChangeTripId = (event) => {
    setTripId(event.target.value)
}

  const routes = useNavigate()

  const goToHome = () => {
    routes("/tripsList")
  }

  const { form, onChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country:""
  });


  const limparformulario =()=>{
   cleanFields() 
    setTripId('')

  }


  const cadastrar = (event) => {
     event.preventDefault();
    
    enviarFormulario(form,idtrip,limparformulario)
    
    console.log("Formulário enviado!", form);
    cleanFields();
  };

  const optionTrip = trips && trips.trips.map((nome)=>{
    return <option key={nome.id} value={nome.id}>{nome.name}</option>

  })

  const optionPais = trips && trips.trips.map((nome)=>{
    return <option key={nome.id} value={nome.id}>{nome.country}</option>

  })

  
   const enviarFormulario=()=>{
     const url=(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/:darvas/trips/${idtrip}/apply`)
     
     const headers={"Content-Type":"application/json"}
     
     axios.post(url,form,{headers})
     .then((res) => {
       if(!setSucesso (res.data.success))
       alert("enviado")
       limparformulario()
       console.log(res.data)

     }).catch ((e)=>{
       console.log(e.res.message)
     })
    }






  const navigate =useNavigate()
  
  const voltarListaViagens =()=>{
    navigate("/ListaDeViagens")
  }
  
  
  return (
      <Container>
       <form onSubmit={cadastrar}>
      <h1>Cadastro</h1>
      <div> 
      
      <div className="selecao">
      <select
     
    defaultValue="" 
    onChange={onChangeTripId}>
    <option value="" disabled>Escolha uma viagem</option>
       {optionTrip}
      </select>
      </div>
      
      
      <input
      name={"name"}
      value={form.name}
      placeholder="Nome"
      onChange={onChange}
      required
      pattern={"^.{3,}"}
      title={"O nome deve ter no mínimo 3 letras"}/>

      <input
      name={"age"}
      value={form.age}
      placeholder="Idade"
      onChange={onChange}
      type={"number"}
      min={18}
      required/>

      <input
      name={"applicationText"}
      value={form.applicationText}
      placeholder="Texto de Candidatura"
      onChange={onChange}
      pattern={"^.{3,}"}
      required
      title={"O texto deve ter no mínimo 30 caracteres"}/>

      <input
      name={"profession"}
      value={form.profession}
      placeholder="Profissão"
      onChange={onChange}
      pattern={"^.{10,}"}
      required
      title={"A profissão deve ter no mínimo 10 caracteres"}/>
      
      <select
              name={"country"}
              value={form.country}
              placeholder="País"
              onChange={onChange} 
              >   
            
              <option value={""} disabled>Escolha um País</option>
              {countries.map((paises)=>{ 
              return <option value={paises} key={paises}>{paises}</option>})}
     
           </select>
      
      
       </div>
       
       <button onClick={voltarListaViagens}>Voltar</button>
        <button type="submit">Enviar</button>
        </form>
      </Container>
    );
  }
  