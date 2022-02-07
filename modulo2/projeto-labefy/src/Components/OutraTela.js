import React from "react"






const urlTracks ="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"



export default class OutraTela extends React.Component {
    state = {
        cards : []
    }
  


     


    //  getPlaylistTracks = () => {
    //  axios
    //  .get(urlTracks,headers)
    //  .then(()=>this.state{playMusic})


    render(){
      return (
        <div >
        <h2>Detalhes</h2>
        <button onClick={this.props.voltar}>ir para Gênero</button>
        </div>
      );
    }
    





  }

  
  
  
  

