import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


import {ActivatedRoute} from '@angular/router';
import {KlassenlisteModel} from '../model/klassenliste-model';
import {HeroService} from '../hero.service';
import {UserModel} from '../model/user-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  klassen: KlassenlisteModel[] = [];
  userId: number;

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) { }

  ngOnInit() {
    this.getKlassen();
  }

  getKlassen(): void {
    this.heroService.getKlassen().subscribe(klassen => this.klassen = klassen);
  }
}
