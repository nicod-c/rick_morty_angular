import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personaje } from '../models/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesServiceService {

  constructor(private http : HttpClient) {

  }

  getPersonajes(page : number) : Observable<Personaje[]> {
    return this.http.get<Personaje[]>('https://rickandmortyapi.com/api/character/?page=' + page);
  }

  getPersonajeById(id : string) : Observable<Personaje>{
    return this.http.get<Personaje>('https://rickandmortyapi.com/api/character/' + id);
  }


}
