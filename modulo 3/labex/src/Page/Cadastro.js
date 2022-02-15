import React from 'react';
import { useNavigate } from 'react-router-dom';

export const  Cadastro = ()=> {
    
  const navigate =useNavigate()
  
  const voltarListaViagens =()=>{
    navigate("/ListaDeViagens")
  }
  
  
  return (
      <div >
       
      <h1>Cadastro</h1>

      <select>

      <option>selecione</option>
      <option>Viagem No tempo</option>
      <option>Viagem Buraco Negro</option>
      <option>Viagem Lua</option>
      <option>Viagem Saturno</option>
      <option>Viagem Intergalática</option>
 
      </select>

      
      <div> 
      <input placeholder="Escolha uma viagem" type="text" require/>
      <input placeholder="Nome Completo" type="text" require/>
      <input placeholder="Idade" type="number" require/>
      <input placeholder="Texto de Candidatura" type="Text" require/>
      <input placeholder="Profissão" type="text" require/>
      </div>
      <select>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
        <option> Selecione</option>
      
      <input placelholder="Escolha um País" type="text" requeired/>
      </select>
        <button onClick={voltarListaViagens}>Voltar</button>

        <button >Enviar</button>
      </div>
    );
  }
  