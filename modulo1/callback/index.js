// exercicio do dia 
//--------------interpretação------------
//1)
//Acredito que vá imprimir todos os elementos do  array
//separado por item= nome e apelido com numeração dos elementos com index

//2) retornará apenas os nos dos ususarios

//3) acredito que não funcionará por conta que ele está pedindo a negação
//de uma string

///////Exercicio de escrita 

//a)const pets = 

const pets = [ 
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]

// Novo array 
/*
//1)a) huhu
    const nomeDosDoguinhos = pets.map((pets,index,array)=>{
    return pets.nome
}) 
console.log(nomeDosDoguinhos)
*/
//b)
/*
const  novaRaca = pets.filter((pets, indice, array)=>{
       return pets.raca === "Salsicha"
})
console.log (novaRaca)
*/
//c) >>> Precisei de ajuda para fazer essa questão <<<<
/*
const poodle=pets.filter((item,index,raca)=>{
    return item.raca === "Poodle"
})
const descontoPoodle=poodle.map((item,index,raca)=>{
return `Você ganhou um cupon de desconto de 10% para tosar o/a ${item.nome}`
})

console.log(descontoPoodle)

*/


//2)
//a)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
/*
 const nomesProdutos=produtos.map((produtos,index,array) => {
     return produtos.nome
 })
 console.log(nomesProdutos)

 //b) 
 const listaProdutos=produtos.map((produtos,index,array) => {
     return produtos.preco 
      })
      console.log(listaProdutos)
  */  
 //c)>>>>>>>>. só consegui com ajuda <<<<<<
 /* 
 function novaLista(item){
       return{
        nome: item.nome,
        preco: item.preco
       };
             
    }
    
    console.log(produtos.map(novaLista));
*/

// d)
const produtosYpe = (item,indice) => {
    return item.nome.includes("Ypê") // determina se exite elemento x
}

const imprimir = (ype) => {
    console.log(`Compre ${ype.nome} por ${ype.preco}`)
}

const produtosype = produtos.filter(produtosYpe)
const nomeproduto = produtosype.map(imprimir)
const precoProduto = produtos.filter(produtosYpe)
const produtosPreco = precoProduto.map(imprimir)

//e) ficou faltando letra é 