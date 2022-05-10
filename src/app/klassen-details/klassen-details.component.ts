import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {KlassenlisteModel} from '../model/klassenliste-model';
import {FaecherModel} from "../model/faecher-model";

@Component({
  selector: 'app-klassen-details',
  templateUrl: './klassen-details.component.html',
  styleUrls: ['./klassen-details.component.scss'],
})
export class KlassenDetailsComponent implements OnInit {

  klassen: KlassenlisteModel | undefined;
  faecher: FaecherModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getKlasse();
    this.getFaecher();
  }

  getKlasse(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getKlasse(id).subscribe(klasse => this.klassen = klasse);
  }
  getFaecher(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getFaecher(this.klassen.name).subscribe(faecher => this.faecher = faecher);
  }
  goBack(): void {
    this.location.back();
  }
}
