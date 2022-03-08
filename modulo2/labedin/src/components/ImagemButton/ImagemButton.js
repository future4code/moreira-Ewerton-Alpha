import React from 'react';
// import './ImagemButton.css'
import {Container} from'./styled'

function ImagemButton(props) {
    return (
        <Container>
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Container>

    )
}

export default ImagemButton;