// const a :number = 2
// const b : number = 2
// const c :number = 2
  



function checaTriangulo(a: number, b: number, c: number) : string {
    if (a !== b && b !== c)  {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

console.log(checaTriangulo(2,2,2))



// -------------------------------------------------------
// refatorando 
// tipirficar as variaveis 
// tipificar a função , neste caso sem retorno seria void




// function imprimeTresCoresFavoritas (cor1:string, cor2: string, cor3:string) :string[]{
//   const arrayDeCores = [] 

//   arrayDeCores.push(cor1,cor2,cor3) 
  
//   return arrayDeCores
// }

// console.log(imprimeTresCoresFavoritas("vermelho", "branco ","preto"))


