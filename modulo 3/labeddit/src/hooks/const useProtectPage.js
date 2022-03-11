import{ useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import { goToFeed } from '../routes/condinator'



// const useProtectPage =() =>{
//     const navigate = useNavigate()
//     useEffect(()=>{
//         const token = localStorage.getItem('token')
//         if(!token){                                   //if ! = se não leia assim
//             goToFeed(navigate)
//         }
//     },[navigate])
// }