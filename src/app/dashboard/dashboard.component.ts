import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


import {ActivatedRoute} from '@angular/router';
import {KlassenlisteModel} from '../model/klassenliste-model';
import {HeroService} from '../hero.service';
import {UserModel} from '../model/user-model';
import {ApiService} from "../api.service";

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
              private apiService: ApiService,
              private location: Location) { }

  ngOnInit() {
    this.getKlassen();
  }

  getKlassen(): void {
    this.apiService.getKlassen(Number(this.route.snapshot.paramMap.get('userId')));
    this.heroService.getKlassen().subscribe(klassen => this.klassen = klassen);
  }
}
