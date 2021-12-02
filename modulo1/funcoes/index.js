// ------------EXERCICIO INTERPRETAÇÃO

// exercicio 1 
//a- vai fazer a multiplicação pela varia descrita 
//dentro da função = 10
//b- mesma coisa vai retornar 50.

//exercicio 2 
// a* vai ser falso porque a string includes
//vai procurar no texto a palavra cenoura
// a - b - c- serão verdadeiras pois existe no texto

// --------------EXERCICIO DE ESCRITA 

//1 )
/*const nomeDoUsuario = prompt("qual é o seu nome ")
const idadeDoUsuario = Number(prompt("qual sua idade"))
const cidadeOndeMora = prompt("qual cidade voce mora")
const estadoOndeMora = prompt("qual estado voce mora")
connsole.log (nomeDoUsuario,idadeDoUsuario,cidadeOndeMora,estadoOndeMora)*/
//A) de um erro 
/*function minhasInformacoes = () {
    console.log("Olá meu nome é ewerton , tenho 31 anos,moro em aracaju , e sou estudante")
}*/

//B)
 /*
function formulariousuario(nome,idade,cidade,profissao) {
    const frase = (`Olá seu ${nome},sua ${idade},sua ${cidade},seu ${profissao}`)
}   return frase
console.log(formulariousuario("ewerton",idade,"cidade","estudante"))*/

 //2 -
//a )feito 
/*
function soma(a,b){
    return a + b
}
    console.log(soma(2,5)) */
// b ) feito
/*
function doisNumeros(n,b){
    return n>=b 
}
 console.log(doisNumeros(4,5))
 */

//c)
/*
function parouimpar (n) {
    if (n%2 == 0){
    return "par!"
   } else { 
       return"impar!"
    }
}
console.log (parouimpar(5))*/

//d)
/*
const 
function formatarNome(texto){
 texto=texto.tolowerCase(texto)
} return texto
console.log(formatarNome(artur))
*/



//3-

function soma (a,b){
    return a + b 
}
console.log(soma())

function subtracao (a,b){
    return a - b
}
console.log(subtrcao())

function multiplicacao (a,b){
    return a * b
}
function divisão (a,b){
    return a / b
}

const numeroInserido =(Number(prompt("inserir 2 numeros")))

