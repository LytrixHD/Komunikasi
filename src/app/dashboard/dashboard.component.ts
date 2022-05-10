import { Component, OnInit } from '@angular/core';

import {KlassenlisteModel} from '../model/klassenliste-model';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  klassen: KlassenlisteModel[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getKlassen();
  }

  getKlassen(): void {
    this.heroService.getKlassen().subscribe(klassen => this.klassen = klassen);
  }
}
