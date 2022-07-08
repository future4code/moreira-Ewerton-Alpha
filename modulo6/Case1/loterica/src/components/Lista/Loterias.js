
import { useEffect, useState } from "react"
import { fetchMega } from "../../services/requests"


export default function Loterias () {
    
  const [states,setState]= useState([]);

   useEffect(()=>{
   fetchMega().then((states) =>{
       setState(states);
   })
   },[])
      
    return (
    <select id = "selecao">
    <option value="">Selecione Sorteio</option>
     {states.map((selecao)=>{
      const {id,nome} = selecao;
      return(<option key={id}value={id}>{nome}</option>)
    })}
    </select>
   )
  }














      // import React, { useEffect, useState } from "react"
// import axios from "axios"

// const Megasenna = () => {
// 	const [mega, setMega] = useState({})

// 	useEffect(() => {
// 		axios.get( "https://brainn-api-loterias.herokuapp.com/api/v1/loterias")
// 		.then((res) => {
// 			setMega(res.data)
// 		})
// 		.catch((err) => {
// 			alert(err.response.message)
// 		})
// 	}, [])

// 	return(
// 		<div>
// 			<p>{mega.nome}</p>
// 		</div>
// 	)
// }

// export default Megasenna