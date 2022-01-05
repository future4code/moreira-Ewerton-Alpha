/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    //1 ) anotacoes de premissas do game
/*
const cartas = [A,2,3,4,5,6,7,8,9,10,J,Q,K]
const naipe = naipe [Copas, Paus, Ouros,Espadas]
const totalCartas = 52
const totalPossibleDifferent =[13n, 4n]

const pgtCarta = [4=4,9=9,],[J,Q,K = 10],[A=11]
const computador 

functtion (num1,num2){
num1= x;
num2= y;
resultado = x+y
return resultado
}

//const vencedor = x>y || y<x

//1) primeira parte 
*/
//>>>>>>>>>>1- 2- 3 -4 <<<<<<<<<<<<<<<<

const startGame =("Boas Vindas ao Jogo Black Jack")
console.log(startGame)
const questionUser = confirm("Deseja participar do game ?")

//console.log(questionUser)
function perguntaUsuer (questionUser){
  if (questionUser){
    console.log("Nova Rodada")  
  } else {
    console.log("voce perdeu")
  }
}

perguntaUsuer(questionUser)

//>>>>>> Segunda Parte do exercicio <<<<<<<<<<<
const maoUsuario1=comprarCarta()
const maoUsuario2=comprarCarta()
const maoCpu1=comprarCarta()
const maoCpu2=comprarCarta()


const carta = comprarCarta()
console.log(`${maoUsuario1} recebeu  ${carta.texto}`)
console.log(`${maoUsuario2} recebeu  ${carta.valor}`)

console.log(`${maoCpu1} recebeu  ${carta.texto}`)
console.log(`${maoCpu2} recebeu  ${carta.valor}`)

if(maoUsuario1,maoUsuario2,maoCpu1,maoCpu2){
  ((maoUsuario1 + maoUsuario2) > (maoCpu1 + maoCpu2))
   console.log(`Usuario Venceu`)
}else 
if((maoUsuario1 + maoUsuario2) < (maoCpu1 + maoCpu2)) {
 console.log(`Computador Venceu`)
}else{

}console.log( `Houve Empate`)
 
