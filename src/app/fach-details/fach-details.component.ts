import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {FaecherModel} from '../model/faecher-model';
import {AufgabenModel} from '../model/aufgaben-model';

@Component({
  selector: 'app-fach-details',
  templateUrl: './fach-details.component.html',
  styleUrls: ['./fach-details.component.scss'],
})
export class FachDetailsComponent implements OnInit {

  fach: FaecherModel | undefined;
  aufgaben: AufgabenModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getFach();
    this.getAufgaben();
  }

  getFach(){
    const fachId = Number(this.route.snapshot.paramMap.get('fachId'));
    const klassenId = Number(this.route.snapshot.paramMap.get('klassenId'));
    this.heroService.getFach(klassenId, fachId).subscribe(fach => this.fach = fach);
  }
  getAufgaben(){
    this.heroService.getAufgaben(this.fach.id).subscribe(aufgaben => this.aufgaben = aufgaben);
  }
  goBack(): void {
    this.location.back();
  }
}
