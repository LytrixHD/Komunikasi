export class ChatInhaltModel {

  public id?: number;
  public time: string;
  public inhalt: string;

  constructor(time: string, inhalt: string) {
    this.time = time;
    this.inhalt = inhalt;
  }
}
