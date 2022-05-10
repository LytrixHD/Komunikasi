import { Injectable } from '@angular/core';
import { KlassenlisteModel, KLASSEN} from './model/klassenliste-model';
import {Observable, of} from 'rxjs';
import {FaecherModel, FAECHER} from './model/faecher-model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getKlassen(): Observable<KlassenlisteModel[]> {
    const klassen = of(KLASSEN.klassenListe);
    return klassen;
  }
  getKlasse(id: number): Observable<KlassenlisteModel>{
    const klasse = KLASSEN.klassenListe?.find(h => h.id === id) ?? null;
    if (klasse === null){
      alert('Fehler in der Matrix');
    }
    return of(klasse);
  }

  getFaecher(klassenNamen: string): Observable<FaecherModel[]>{
    const faecher = of(FAECHER[klassenNamen]);
    return faecher;
  }
  getFach(klassenNamen: string, id: number): Observable<FaecherModel>{
    const fach = FAECHER[klassenNamen]?.find(h => h.id === id) ?? null;
    return of(fach);
  }
}
