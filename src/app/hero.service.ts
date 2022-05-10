import { Injectable } from '@angular/core';
import { KlassenlisteModel, KLASSEN} from './model/klassenliste-model';
import {Observable, of} from 'rxjs';
import {FaecherModel, FAECHER} from './model/faecher-model';
import {AUFGABEN, AufgabenModel} from './model/aufgaben-model';

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
    return of(klasse);
  }

  getFaecher(klassenId: number): Observable<FaecherModel[]>{
    const faecher = of(FAECHER[klassenId]);
    return faecher;
  }
  getFach(klassenId, fachId: number): Observable<FaecherModel>{
    const fach = FAECHER[klassenId]?.find(h => h.id === fachId) ?? null;
    return of(fach);
  }

  getAufgaben(fachId: number): Observable<AufgabenModel[]>{
    const aufgaben = of(AUFGABEN[fachId]);
    return aufgaben;
  }
  getAufgabe(fachId: number, aufgabenId: number): Observable<AufgabenModel>{
    const aufgabe = AUFGABEN[fachId]?.find(h => h.id === aufgabenId) ?? null;
    return of(aufgabe);
  }
}
