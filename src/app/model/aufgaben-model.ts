export class AufgabenModel {

  public id: number;
  public aufgabenName: string;
  public aufgabenBeschreibung: string;


  constructor(id: number, aufgabenName: string,aufgabenBeschreibung: string) {
    this.id = id;
    this.aufgabenName = aufgabenName;
    this.aufgabenBeschreibung = aufgabenBeschreibung;
  }
}

export const AUFGABEN = {
  1:
    [
      new AufgabenModel(1,'Mathe SA','Das ist Mathe'),
      new AufgabenModel(2,'SMÜ','Das ist Deutsch'),
      new AufgabenModel(3,'S. 185','Das ist Spanisch')
    ],
  2:
    [
      new AufgabenModel(1,'Geschichte','Das ist Geschichte'),
      new AufgabenModel(2,'Netzwerktechnik','Das ist Netzwerktechnik'),
      new AufgabenModel(3,'Informationssysteme','Das ist Informationssysteme')
    ],
  3:
    [
      new AufgabenModel(1,'Englisch','Das ist Englisch'),
      new AufgabenModel(2,'Medientechnik','Das ist Medientechnik'),
      new AufgabenModel(3,'Softwareentwicklung','Das ist Softwareentwicklung')
    ]
};
