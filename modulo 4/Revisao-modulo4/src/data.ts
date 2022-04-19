import { character, GENDER, movie } from "./type"

// no video ele Exportou
// o nome da const tem que ser diferente do tipo
 export let movies : movie[] = [
    { 
     id:1,
     title:"x - men o filme",
     year:2000
    },
    { 
        id:2,
        title:"Deadpoll",
        year:2016
       }
    
]

export let characters:character[]=[
    {
    id: 1,
    name: "Storm",  
    gender: GENDER.FEMALE
    },{
    id: 2,
    name: "Deadpool",
    gender: GENDER.OTHER,
    description:"Sexy motherf***"
    },{
    id: 3,
    name: "Colossus",
    gender: GENDER.MALE,
    }
   ]
   