
import axios from "axios";
import React from "react"
// import { urlPlaylist } from "../GetAllPlaylist/GetAllplaylist"; tentativa template string

 const urlPlaylist = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"


const headers = {
    headers: {
      Authorization: "ewerton-francis-moreira"
    }
  };






export default class Tela1 extends React.Component {
   //-> lugar onde  vou guardar os dados da api
   
   state ={
       todasPlaylist:[] ,
       pLaylistInput:""              //=> para guardar valor do input 
   }

    
   componentDidMount= () =>{
         this.getAllPlaylist()
    }

    getAllPlaylist = () => {
    
    axios
     .get(urlPlaylist,headers)        //* tentei template string mas nao consegui *//
     .then((res)=>this.setState({todasPlaylist:res.data.result.list}))
     .catch((err)=>{                                    //existia um console.log(err.response) para ver se funcionou
        alert("Algo deu erra tente novamente")
     })
     
   }
   
   createPLaylist = () => {
      const body = {
          name : this.state.pLaylistInput
      }
      axios
      .post(urlPlaylist, body , headers)                           //urls e o headers já estão senfo chamsdos e body na func acima
      .then((response)=>{
         alert (`A playlist ${this.state.pLaylistInput} foi criada com sucesso`)  // acento e não aspas
         this.setState({pLaylistInput:""})
         this.getAllPlaylist()
    })
      .catch((err) => {
        //  console.log(err.response)
         alert(err.response.data.message); 
         this.setState({playlistInput:""})                     // o certo seria tratar o erro

      } )                 
   };

  
   

   ontextoInput = (event) => {
       this.setState({pLaylistInput:event.target.value})   //sempre isso event.target.value => onchange
   }
   
   
   
    render(){
       // console.log(this.state.todasPlaylist) // agora que eu sei que funciona [] transformo em obj
        
        const novaPlaylist = this.state.todasPlaylist.map((nova)=>{  //map tranfomando o state em lista
            return  <li key={nova.id}>{nova.name}</li>
        })
      return (
        <div >
        <h1>Labefy </h1>
        <h2>Gênero Musical Playlist</h2>
        <input 
        value={this.state.pLaylistInput}     //=>pegando o valor do estado 2- criar função (event)para o valor do input
        onChange ={this.ontextoInput}
        placeholder="playlist"
        />
        <button onClick={this.createPLaylist}>Adicionar </button>
        <div>
        <button>ir para sua plylist</button>
        </div>
        {novaPlaylist}
        
        
       
        </div>
      );
    }
    
  }