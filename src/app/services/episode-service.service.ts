import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeServiceService {

  constructor(private http: HttpClient) {

  }


  getEpisodes(page : number) : Observable<Episode[]> {
    return this.http.get<Episode[]>('https://rickandmortyapi.com/api/episode/?page=' + page);
  }

}


