import React from 'react';
// import './CardGrande.css'
import styled from 'styled-components'
// o import não quer fumcionar pela manhã funcionou
const Container = styled.div`
    
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid black;
padding: 15px 40px;
margin-bottom:40px;
margin-top:0px:
height:0px;
font-weight: bold;

img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
}
`




function CardPequeno(props) {

    
    return (
        <Container>
            
               
        <p>{ props.email}</p>
       
        <p>{ props.endereco}</p>
             
        </Container>
    )
}

export default CardPequeno;