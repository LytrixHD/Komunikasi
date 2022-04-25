import {UserListeModel} from './userListe-model';
import {FaecherListeModel} from './faecherListe-model';

export class KlassenModel {

  public id?: number;
  public name: string;
  public userListe: UserListeModel;
  public faecherListe: FaecherListeModel;

  constructor(name: string,userListe: UserListeModel,faecherListe: FaecherListeModel) {
    this.name = name;
    this.userListe = userListe;
    this.faecherListe = faecherListe;
  }
}
