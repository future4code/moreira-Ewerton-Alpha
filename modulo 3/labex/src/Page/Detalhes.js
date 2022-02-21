import { useEffect } from "react";
import axios from "react";
import { useNavigate } from "react-router-dom";

export const Detalhes = () => {
  

  const token = localStorage.getItem("token");
  // const navigate = useNavigate();
  
  
  // const voltarHome = () => {
  //   navigate("/");
  // };

  useEffect =
    (() => {
      axios
        .get(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Ewerton/trips/",
          {
            headers: {
              auth: token,
            },
          }
        )
        .then((response) => {
          console.log("Deu Certo", response.data.token);
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
          console.log("Deu Errado", error.response);
        });
    },
    []);

 

  return (
    <div>
      Lista de Detalhes
      {/* <button onClick={voltarHome}>voltar</button> */}
    </div>
  );
};
