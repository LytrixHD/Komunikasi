export class KlassenlisteModel {

  public id: number;
  public name: string;
  public userListe: number[];
  public faecherListe: number[];

  constructor(id: number, name: string,userListe: number[],faecherListe: number[]) {
    this.id = id;
    this.name = name;
    this.userListe = userListe;
    this.faecherListe = faecherListe;
  }
}

export const KLASSEN = {
  klassenListe:
  [
    new KlassenlisteModel(1,'4AHITN',[1],[1]),
    new KlassenlisteModel(2,'2BHITN',[1],[1]),
    new KlassenlisteModel(3,'1CHIT',[1],[1]),
    new KlassenlisteModel(4,'5AHIT',[1],[1])
  ]
};
