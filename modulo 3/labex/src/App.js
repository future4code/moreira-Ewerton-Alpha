import React from "react";
import { Home } from "../src/Page/Home";
import { Cadastro } from "../src/Page/Cadastro";
import { ListaDeViagens } from "./Page/ListaDeViagens";
import { ErrorPage } from "./Page/ErrorPage";
import { Administrativo } from "./Page/Administrativo";
import {Logon} from "../src/Page/Logon"
import {CriarViagens} from "../src/Page/CriarViagens"
import { BrowserRouter,Routes,  Route } from "react-router-dom";






export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      
       <Route path='/' element={<Home />} />
       
       <Route path='/ListaDeViagens' element={<ListaDeViagens />} />
       
       <Route path='/Cadastro' element={<Cadastro />} />
        
       
        
      <Route path='/Logon' element={<Logon />}/>
       
      <Route path='/Administrativo' element={<Administrativo />}/>
       
      <Route path='/CriarViagens' element={<CriarViagens />}/>
       
       
       <Route path='/ErrorPage' element={<ErrorPage />}/>

       
       
        </Routes> 
      
    </BrowserRouter>
  );
}
