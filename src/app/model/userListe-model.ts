export class UserListeModel {

  public id: number[];
  public rights: boolean[];

  constructor(id: number[], rights: boolean[],) {
    this.id = id;
    this.rights = rights;
  }
}
