import { Component, OnInit } from '@angular/core';
import {UserListeModel} from '../model/userListe-model';
import {FaecherListeModel} from '../model/faecherListe-model';
import {KlassenModel} from '../model/klassen-model';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-klasse-erstellen',
  templateUrl: './klasse-erstellen.page.html',
  styleUrls: ['./klasse-erstellen.page.scss'],
})
export class KlasseErstellenPage implements OnInit {

  public id: number[];
  public rights: boolean[];
  public fachId: number[];
  public name: string;

  constructor(public apiService: ApiService,private router: Router) { }

  ngOnInit() {}

    erstellen(){

      const userListe = new UserListeModel(this.id,this.rights);
      const faecherListe = new FaecherListeModel(this.fachId);
      const klasse = new KlassenModel(this.name,userListe,faecherListe);

      this.router.navigate( ['/tabs/klassenliste']);
    }

}
