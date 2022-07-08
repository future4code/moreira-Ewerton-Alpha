
// import { Axios } from "axios"
import BASE_URL from "../constants/base"
// import React, { useEffect, useState } from "react"


// export const requisicaoMega = () => {
//     Axios.get(`${BASE_URL}/loterias`)
//      .then((response)=>console.log(response))
//      .catch((error)=>console.log(error))
//     }


export const fetchMega = () => {

    return fetch(`${BASE_URL}/loterias`).then(response => response.json())
}



export const fetchConcurso = () => {
    return fetch(`${BASE_URL}/loterias-concursos`).then(response => response.json())

}