// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  // implemente sua lógica aqui
  const resultado = altura * largura
  return resultado
} calculaAreaRetangulo(3,5)

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let nascimentoUsuario= Number(prompt(`ano de nascimento`))
  let anoAtual = Number(prompt(`qual ano atual`))
  console.log(`Data aniversario ${nascimentoUsuario} e estamos no ano de ${anoAtual}` )
} imprimeIdade(1990,2020)


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let resultado = peso / altura
  return resultado
} calculaIMC(85,1,8)

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nomeUsuario = (prompt(`qual seu nome`))
  let idadeUsuario = Number(prompt(`qual sua idade`))
  let emailUsuario = (prompt(`qual seu email`))
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario}, o meu email é ${emailUsuario}`)
}imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt(`quais sua primeira favoritas?`)
  const cor2 = prompt(`quais sua segunda cor favorita?`)
  const cor3 = prompt(`qual sua terceira cor favorita?`)
  return resutado=[cor1,cor2,cor3]
} imprimeTresCoresFavoritas()

// EXERCÍCIO 06
function retornaStringEmMaiuscula() {
  // implemente sua lógica aqui
  const string = `Olá mundo `
  const resultado = string.toUpperCase()
  return resultado
}retornaStringEmMaiuscula()


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo,valor) {
  // implemente sua lógica aqui
const resultado = custo / valor
return resultado
} calculaIngressosEspetaculo(300,100) 
 
// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1,string2) {
  // implemente sua lógica aqui
const string1 = "olá"
const string2 = "abc"
const resultado = length()
 
}checaStringsMesmoTamanho()

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {[1,2,3]
  // implemente sua lógica aqui
return [1]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}