// QUESTOES DE INTERPRETAÇÃO
//1
// a) posição 0 pelo indice matheus Nachtergaele
// b) posição ultima posição - a ultima 
// c) canal glibo as 14 horas - posição referete ao indice

//2)a) 1º console- nome ='juca' 'idade =3' raça= 'SRD'
//     2º console -nome ='juba' 'idade =3' raça= 'SRD' => tem alteração por conta do spread
//     3º console  nome ='jubo' 'idade =3' raça= 'SRD' => vai ter alteração por conta replace.all altera a por o

// b ) Por uma questão de produtividade ela atualiza as referencias em
// relação auma propriedade sem a necessidade de necessariamente copia-lá

// 3 )
/*
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))


const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}
*/   
// 3)terceira questão 
// a) leatra a é falsa = porque existe atribuição
// b) indefinida porque não existe atribuição

// escrita de codigo

//1)
//A)
/*

const Pessoa = {
 nome : `Robson`,
 apelidos : [`robsinho`,`robs`,`robsera`]
 }

console.log(`Eu sou,${Pessoa.nome},mas pode me chamar de :${Pessoa.apelidos[0]},${Pessoa.apelidos[1]},${Pessoa.apelidos[2]}`)
// Eu sou,Robson,mas pode me chamar de :robsinho,robs,robsera.

//b)

function novoChamamento(Pessoa){
    const novoChamado = {
    ...Pessoa, // spread operator
    nome : `Robson`,
    apelidos : [`amigo`,`brother`,`colega`],
  }
} 
   console.log(`Eu sou,${novoChamado.nome},mas pode me chamar de :${novoCnhamamento.apelidos[0]},${novoChamamento.apelidos[1]},${novoChamamento.apelidos[2]}`)
   
*/
//2
 //a)
 /*
  const tia = {
      nome:`valdinete`,
      idade:40,
      profissao:`marabalista` 
  }

  const nora = {
      nome: `tania`,
      idade:50,
      profissao:`mergulhadora`
  }
*/
  //b) 
  const tia = {
    nome:`valdinete`,
    idade:40,
    profissao:`marabalista` 
}
    function minhafuncao(pessoa){

 

 }