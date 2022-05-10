export class FaecherModel {

  public id: number;
  public fachName: string;

  constructor(id: number,fachName: string) {
    this.id = id;
    this.fachName = fachName;
  }
}

export const FAECHER = {
  1:
  [
    new FaecherModel(1,'Mathe'),
    new FaecherModel(2,'Deutsch'),
    new FaecherModel(3,'Spanisch')
  ],
  2:
    [
      new FaecherModel(4,'Geschichte'),
      new FaecherModel(5,'Netzwerktechnik'),
      new FaecherModel(6,'Informationssysteme')
    ],
  3:
    [
      new FaecherModel(7,'Englisch'),
      new FaecherModel(8,'Medientechnik'),
      new FaecherModel(9,'Softwareentwicklung')
    ]
};
