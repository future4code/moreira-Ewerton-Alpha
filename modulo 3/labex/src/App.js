import React from "react";
import { Home } from "../src/Page/Home";
import { Cadastro } from "../src/Page/Cadastro";
import { ListaDeViagens } from "./Page/ListaDeViagens";
import { ErrorPage } from "./Page/ErrorPage";
import { Administrativo } from "./Page/Administrativo";
import {Logon} from "../src/Page/Logon"
import { BrowserRouter,Routes,  Route } from "react-router-dom";






export default function App() {
  return (
    <BrowserRouter>
     <Routes>
      
       <Route path='/' element={<Home />} />
       
       <Route patch='/Administrativo' element={<Administrativo />}/>
       
       <Route path='/ListaDeViagens' element={<ListaDeViagens />} />
       
       <Route path='/Cadastro' element={<Cadastro />} />
        
       <Route path='/ListaDeViagens' element={<ListaDeViagens />} />
        
       <Route patch='/Logon' element={<Logon />}/>
       
       <Route patch='/ErrorPage' element={<ErrorPage />}/>

       
       
        </Routes> 
      
    </BrowserRouter>
  );
}
