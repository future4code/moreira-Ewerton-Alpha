export enum User_Roles {
    NORMAL = "NORMAl",
    ADMIN = "ADMIN"
}

export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: string
  ) {}

  public getId(){
    return this.id
  }

  public getName(){
    return this.name
  }

  public getEmail(){
    return this.email
  }

  public getPassword(){
    return this.password
  }

  public getRole(){
    return this.role
  }

  static toUserModel(data: any): User {
    return new User(data.id,data.name,data.email,data.password,data.role);
  }
}

//pode-se escrever dessa forma ou abreviar da maneira acima

// export class User {
//     private name: string,
//     private email:string
//     constructor(name: string, email: string){
//         this.name = name
//         this.email= email
//     }

// }
