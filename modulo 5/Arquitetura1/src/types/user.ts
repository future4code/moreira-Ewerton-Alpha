export enum USER_ROLES {
    NORMAL = "NORMAl",
    ROLE  = "ADMIN"
}

export type User = { 
   
    name:string,
    email : string ,
    password : string ,
    role: "NORMAl" | "ADMIN"
}