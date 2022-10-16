import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ResponseCharacters, ResponseCharacterID } from '../../models/response-character.response';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters$ = new EventEmitter();

  constructor( private http: HttpClient ) {}

  findCharacters () {
    const url = "https://rickandmortyapi.com/api/character?count=100";
    return this.http.get<ResponseCharacters>(url)
  }

  findOneCharacter (id: number) {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    return this.http.get<ResponseCharacterID>(url)
  }

  searchCharacter (name: string) {
    const url = "https://rickandmortyapi.com/api/character?name="
    return this.http.get<ResponseCharacters>(url + name)
  }
}
