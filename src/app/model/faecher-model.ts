import {AufgabeModel} from '../model/aufgabe-model';
export class FaecherModel {

  public id?: number;
  public fachName: string;
  public aufgaben: AufgabeModel[];

  constructor(fachName: string, aufgaben: AufgabeModel[]) {
  this.fachName = fachName;
  this.aufgaben = aufgaben;
  }
}
