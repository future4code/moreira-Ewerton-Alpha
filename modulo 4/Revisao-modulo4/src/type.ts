 export type movie = {
     id:number,
     title:string,
     year:number
 }

 // no video ele Exportou
//ele Enum defini as possibilidades de tipasgens
export enum GENDER {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
   }

   //
   export type character = {
    id: number
    name: string
    gender: GENDER
    description?: string
   }