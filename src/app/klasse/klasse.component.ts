import { Component, OnInit } from '@angular/core';
import {KlassenlisteModel, KLASSEN} from '../model/klassenliste-model';

@Component({
  selector: 'app-klasse',
  templateUrl: './klasse.component.html',
  styleUrls: ['./klasse.component.scss'],
})
export class KlasseComponent implements OnInit {
  klassen = KLASSEN.klassenListe;
  constructor() { }

  ngOnInit() {}

}
