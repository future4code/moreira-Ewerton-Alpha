type Person = {
    nome : string ;
    dataNasc: string
};

const printPerson = (person:Person) =>{
  const char : string[] = person.dataNasc.split("/")
  console.log(`Olá me chamo ${person.nome}, nasci no dia ${char[0]} do mês de maio ${char[1]} do ano de ${char[2]}` )
}



printPerson({nome:'Ewerton' , dataNasc:'23/05/1990'})



