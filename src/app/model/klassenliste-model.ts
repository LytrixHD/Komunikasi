export class KlassenlisteModel {

  public id: number;
  public name: string;


  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const KLASSEN = {
  klassenListe:
  [
    new KlassenlisteModel(1,'4AHITN',),
    new KlassenlisteModel(2,'2BHITN',),
    new KlassenlisteModel(3,'1CHIT',),
    new KlassenlisteModel(4,'5AHIT',)
  ]
};
