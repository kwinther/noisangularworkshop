import { Injectable } from '@angular/core';
import { Character, Characters, Episodes } from 'src/Character.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCharactersService {
  private character = 'https://rickandmortyapi.com/api/character';
  private episode = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) {
  }

  getCharacters(): Observable<Characters> {
    return this.http.get<Characters>(this.character);
  }

  getCharacter(id): Observable<Character> {
    return this.http.get<Character>(this.character.concat('/' + id));
  }

  getEpisodes(): Observable<Episodes> {
    return /* a potato? */ ;
  }
}
