export class UserModel {

public id?: number;
public name: string;
public password: string;

  constructor(name:string,password:string) {
    this.name = name;
    this.password = password;
  }
}
