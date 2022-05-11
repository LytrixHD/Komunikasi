import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {KlassenlisteModel} from '../model/klassenliste-model';
import {FaecherModel} from '../model/faecher-model';

@Component({
  selector: 'app-klassen-details',
  templateUrl: './klassen-details.component.html',
  styleUrls: ['./klassen-details.component.scss'],
})
export class KlassenDetailsComponent implements OnInit {

  klasse: KlassenlisteModel | undefined;
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
    const klassenId = Number(this.route.snapshot.paramMap.get('klassenId'));
    this.heroService.getKlasse(klassenId).subscribe(klasse => this.klasse = klasse);
  }
  getFaecher(){
    this.heroService.getFaecher(this.klasse.id).subscribe(faecher => this.faecher = faecher);
  }
  goBack(): void {
    this.location.back();
  }
}
