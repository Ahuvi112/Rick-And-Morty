import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Character } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  private apiUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) { }

  public getCharacters(page: number): Observable<Character[]> {
    return this.http.get<Character[]>(`${this.apiUrl}character?page=${page.toString()}`);
  }

  public showCharacters(characterUrls: string[] | undefined): Observable<Character[]> {
    if (!characterUrls) {
      return new Observable<Character[]>(observer => observer.next([]));
    }

    const requests: Observable<Character>[] = characterUrls.map(url => this.http.get<Character>(url));
    return forkJoin(requests);
  }

  public getLocation(page: number): Observable<Location[]> {
    return this.http.get<Location[]>(`${this.apiUrl}location?page=${page.toString()}`);
  }
  
}
