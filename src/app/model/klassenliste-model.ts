export class KlassenlisteModel {

  public id?: number;
  public name: string;
  public userListe: number[];
  public faecherListe: number[];

  constructor(name: string,userListe: number[],faecherListe: number[]) {
    this.name = name;
    this.userListe = userListe;
    this.faecherListe = faecherListe;
  }
}

export const KLASSEN = {
  klassenListe:
  [
    new KlassenlisteModel('4AHITN',[1],[1]),
    new KlassenlisteModel('3BHITN',[1],[1]),
    new KlassenlisteModel('1CHIT',[1],[1]),
    new KlassenlisteModel('5AHIT',[1],[1])
  ]
};
