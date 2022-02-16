import React from "react";
import { useNavigate } from "react-router-dom";

export const CriarViagens = () => {
  const navigate = useNavigate();

  const voltarHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Criar Viagem </h1>
      <form>
      <input placeholder="Nome Completo" type="text" require />
      <select require>
        <option>Escolha uma Viagem</option>
        <option>Viagem No tempo</option>
        <option>Viagem Buraco Negro</option>
        <option>Viagem Lua</option>
        <option>Viagem Saturno</option>
        <option>Viagem Intergalática</option>
      </select>

      

      <div>
        
        <input type="date" require />
        <input placeholder="Descrição" type="text" require />
        <input placeholder="Duração em Dias" type="Number" require />
      </div>
      </form>
      <button onClick={voltarHome}>Voltar</button>

      <button>Enviar Viagem</button>
    </div>
  );
};
