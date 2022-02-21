import React, { Component } from 'react';
import { Home } from "./Page/Home";
import { Cadastro } from "./Page/Cadastro";
import { ListaDeViagens } from "./Page/ListaDeViagens";
import { ErrorPage } from "./Page/ErrorPage";
import { Administrativo } from "./Page/Administrativo";
import {Logon} from "./Page/Logon"
import {CriarViagens} from "./Page/CriarViagens"
import { Detalhes } from "./Page/Detalhes"
import { BrowserRouter,Routes,  Route } from "react-router-dom";






export default function RotasApp() {
  return (
    <BrowserRouter>
     <Routes>
      
       <Route path='/' element={<Home />} />
       
       <Route path='/ListaDeViagens' element={<ListaDeViagens />} />
       
       <Route path='/Cadastro' element={<Cadastro />} />
        
       
       <Route path='/Logon' element={<Logon />}/>
       
      <Route path='/Administrativo' element={<Administrativo />}/>

      <Route path='/Detalhes' element={<Detalhes />}/>

      <Route path='/CriarViagens' element={<CriarViagens />}/>
       
       
       <Route path='/ErrorPage' element={<ErrorPage />}/>

       
       
        </Routes> 
      
    </BrowserRouter>
  );
}