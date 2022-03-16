import { useEffect } from "react";
import axios from "react";
import { useNavigate } from "react-router-dom";

export const Detalhes = () => {
   
  const navigate = useNavigate();

  const {id}= useParams();

  const token = localStorage.getItem('token')

  const [add,setadd] = useState(false)
 
 
 const putPerson = (tripId,candidateId)=>{
 const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trips/${tripId}/candidates/${id}/decide`
 const headers = {auth:localStorage.getItem("token")}

 axios 
 .put(url,headers)
 .then((res)=>{
   if(add === true){
     alert(`adicionar lista`)
   }
   else{alert()}
 })







 }
 
  

       
        
        .then((response) => {
          console.log("Deu Certo", response.data.token);
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
          console.log("Deu Errado", error.response);
        });
    

 

  return (
    <div>
      Lista de Detalhes
      {/* <button onClick={voltarHome}>voltar</button> */}
    </div>
  );
};
