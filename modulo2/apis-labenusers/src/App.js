import axios from "axios";
import React from "react"



const headers ={
  headers : {
     Authorization: "ewerton-francis-moreira"
  }
};
 const urlAllusers = 
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
 


export default class App extends React.Component {
   state= {
     gerenciaUsuario:[],
     nome:"" ,
     email:"" 

   }
  
   componentDidMount() {
    this.getAllUsers();

  }

  getAllUsers= () => {
    
    axios
    .get(urlAllusers,headers)
    .then((response) => {
    //  console.log(response.data)
     this.setState({gerenciaUsuario:response.data})  //preciso encotrar o caminho do objetos como na doc no navegador
    })
     .catch((error)=> {
      // console.log(error.response)
      alert("algo deu errado tente novamente")
     })
        
  }
  
  postCreateUser = () =>{
    const body ={
      nome: this.state.name ,
      email:this.state.email
      
    }
    
    
    axios
    .post(urlAllusers,headers,body)
    .then((response)=>{
      this.setState({nome:""}),
      this.setState({email:""})
    })
     .catch(err)
     alert(err.response);    // this.setState({nome:""})  // 
     this.setState({ nome: "" });    //body tem nome e email qual maneira correta de trato sintaxe ?
     this.setState({email:""})       
   };                                          
    

  }
    
  textoInputUser = (event) => {
    this.setState({nome:event.target.value}) //sempre isso event.target.value nesse caso salvar no estado
  }
  textoInputEmail= (event) => {
    this.setState({email:event.target.value})
  }

  
  
  
  render () {
    const novoUsers = this.state.gerenciaUsuario.map((novo) => {
      return <li key={novo.email}>{novo.name}</li>;
    });
    
       return (
      <div>
        <h1>Labenusers</h1>
        <div>
        
        <button> outra tela</button>
        </div>
        <input 
        value={this.state.nome} 
        onChange={this.textoInputUser} 
        placeholder="nome"/>
        
        <input value={this.state.email} 
        onChange={this.textoInputEmail} 
        placeholder="email"/>
        
        <button onClick={this.createPlaylist}>Enviar</button>
        {novoUsers}
        
      </div>
    );

   }
  
  
}


