import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ResponseCharacters, ResponseCharacterID } from '../models/response-character.response';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor( private http: HttpClient ) {}

  findCharacters () {
    const url = "https://rickandmortyapi.com/api/character";
    return this.http.get<ResponseCharacters>(url)
  }

  findOneCharacter (id: number) {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    return this.http.get<ResponseCharacterID>(url)
  }
}
