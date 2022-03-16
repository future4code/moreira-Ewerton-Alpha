import React from 'react'
// import styled from "styled-components"
// import {Button} from '@material-ui/core/Button'

import { goToFeed,goToRegister } from '../../routes/condinator';
import { useNavigate } from 'react-router-dom';
import {Titulo}from './styled'
import {Texto}from './styled'
import {Main} from './styled'
import { Button, buttonGroupClasses, OutlinedInput, TextField } from '@mui/material';
import useForm from '../../hooks/useForm';
import HomeForm from './HomeForm'







const  HomePage = () => {

 
 
  
 
 
 return (
    <div>
      <div>
     <Titulo >Labeddit</Titulo>
     <Texto>O LabEddit ajuda-te a comunicar e a partilhar 
        com as pessoas que fazem parte da tua vida</Texto>
     </div>
     <HomeForm/>

    </div>
  );
}

export default  HomePage