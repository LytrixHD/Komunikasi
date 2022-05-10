export class FaecherModel {

  public id?: number;
  public fachName: string;

  constructor(id: number,fachName: string) {
  this.fachName = fachName;
  }
}

export const FAECHER = {
  '4AHITN':
  [
    new FaecherModel(1,'Mathe'),
    new FaecherModel(2,'Deutsch'),
    new FaecherModel(3,'Spanisch')
  ],
  '2BHITN':
    [
      new FaecherModel(1,'Geschichte'),
      new FaecherModel(2,'Netzwerktechnik'),
      new FaecherModel(3,'Informationssysteme')
    ],
  '1CHIT':
    [
      new FaecherModel(1,'Englisch'),
      new FaecherModel(2,'Medientechnik'),
      new FaecherModel(3,'Softwareentwicklung')
    ]
};
