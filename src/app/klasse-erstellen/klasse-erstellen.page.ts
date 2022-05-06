import { Component, OnInit } from '@angular/core';
import {KlassenlisteModel} from '../model/klassenliste-model';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-klasse-erstellen',
  templateUrl: './klasse-erstellen.page.html',
  styleUrls: ['./klasse-erstellen.page.scss'],
})
export class KlasseErstellenPage implements OnInit {

  constructor(public apiService: ApiService,private router: Router) { }

  ngOnInit() {}

    erstellen(){
      this.router.navigate( ['/tabs/klassenliste']);
    }

}
