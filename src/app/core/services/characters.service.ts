import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ResponseCharacters, ResponseCharacterID, ResponseEpisodes } from '../../models/response-character.response';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters$ = new EventEmitter();
  quantityPages$ = new EventEmitter();
  nameToSearch$ = new EventEmitter()

  constructor( private http: HttpClient ) {}

  findCharacters (page: number, name: string) {
    let url = `https://rickandmortyapi.com/api/character?page=${page}`
    if(name !== '') {
      url = `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`;
    }
    return this.http.get<ResponseCharacters>(url)
  }

  findOneCharacter (id: number) {
    const url = `https://rickandmortyapi.com/api/character/${id}`
    return this.http.get<ResponseCharacterID>(url)
  }

  findEpisodes(url: string) {
    return this.http.get<ResponseEpisodes>(url)
  }

}
