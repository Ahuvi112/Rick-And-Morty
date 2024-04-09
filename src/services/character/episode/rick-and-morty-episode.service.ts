import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from '../../../models/episode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyEpisodeService {

  private apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  public getEpsido(page: number): Observable<Episode[]> {
    return this.http.get<Episode[]>(`${this.apiUrl}episode?page=${page.toString()}`);
  }
}
